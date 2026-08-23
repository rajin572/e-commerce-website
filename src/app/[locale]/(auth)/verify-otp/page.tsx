"use client";

import React, { useState, useRef, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    verifySignupOtp,
    verifyForgotOtp,
    resendOtp,
} from '@/service/AuthService/AuthServiceAPi';
import tryCatchWrapper from '@/utils/tryCatchWrapper';
import { Button } from "@/components/ui/button";

// The backend issues 6-digit codes (auth.service generateOtp).
const OTP_LENGTH = 6;
// How long the code stays valid — display only (OTP_EXPIRES_IN=5).
const EXPIRES_AFTER = 300;
// The backend rejects a resend within 60s of the last one, so the button
// follows that, not the expiry. Burning your attempts must not strand you.
const RESEND_COOLDOWN = 60;

function VerifyOTPContent() {
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
    const [expiresIn, setExpiresIn] = useState(EXPIRES_AFTER);
    const [resendIn, setResendIn] = useState(RESEND_COOLDOWN);
    // Set when the server says this code can no longer be used at all.
    const [codeDead, setCodeDead] = useState(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email') || '';
    const type = searchParams.get('type') || 'signup';

    const isReset = type === 'reset';
    const canResend = resendIn === 0;

    useEffect(() => {
        const id = setInterval(() => {
            setExpiresIn((prev) => (prev > 0 ? prev - 1 : 0));
            setResendIn((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(id);
    }, []);

    const focusInput = (index: number) => inputRefs.current[index]?.focus();

    const handleChange = (index: number, value: string) => {
        const digits = value.replace(/\D/g, '');
        if (!digits) {
            setOtp((prev) => prev.map((d, i) => (i === index ? '' : d)));
            return;
        }

        // Handles both single keystrokes and a pasted full code.
        setOtp((prev) => {
            const next = [...prev];
            for (let i = 0; i < digits.length && index + i < OTP_LENGTH; i++) {
                next[index + i] = digits[i];
            }
            return next;
        });

        focusInput(Math.min(index + digits.length, OTP_LENGTH - 1));
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            focusInput(index - 1);
        }
    };

    /** The server burns the code after too many wrong tries, or on expiry. */
    const isDeadCodeMessage = (message?: string) => {
        const m = (message ?? '').toLowerCase();
        return m.includes('max attempts') || m.includes('expired') || m.includes('not found');
    };

    const handleFailure = (message?: string) => {
        setOtp(Array(OTP_LENGTH).fill(''));
        focusInput(0);
        if (isDeadCodeMessage(message)) setCodeDead(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        // e.preventDefault();
        // const code = otp.join('');
        // if (code.length !== OTP_LENGTH) return;

        // const res = isReset
        //     ? await tryCatchWrapper(
        //           verifyForgotOtp,
        //           { body: { email, otp: code } },
        //           { toastLoadingMessage: "Verifying OTP..." }
        //       )
        //     : await tryCatchWrapper(
        //           verifySignupOtp,
        //           { body: { code } },
        //           { toastLoadingMessage: "Creating account..." }
        //       );

        // if (res?.success) {
        //     // verifyForgotOtp stores the reset token in an httpOnly cookie.
        //     router.push(isReset ? '/reset-password' : '/success');
        // } else {
        //     handleFailure(res?.message);
        // }
    };

    const handleResend = async () => {
        const res = await tryCatchWrapper(
            resendOtp,
            { body: { email, type: isReset ? 'forgot' : 'signup' } },
            { toastLoadingMessage: "Resending OTP..." }
        );

        if (res?.success) {
            setExpiresIn(EXPIRES_AFTER);
            setResendIn(RESEND_COOLDOWN);
            setCodeDead(false);
            setOtp(Array(OTP_LENGTH).fill(''));
            focusInput(0);
        }
    };

    const formatTime = (time: number) => {
        const m = Math.floor(time / 60);
        const s = time % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Verify OTP 🔢</h1>
                <p className="text-text-secondary leading-relaxed">
                    We&apos;ve sent a {OTP_LENGTH}-digit code to{' '}
                    <span className="font-semibold text-foreground">{email}</span>. Please enter it below.
                </p>
            </div>

            {codeDead && (
                <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                    That code can no longer be used. Request a new one
                    {canResend ? ' below.' : ` in ${formatTime(resendIn)}.`}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="flex justify-between gap-2 sm:gap-3">
                    {otp.map((digit, idx) => (
                        <input
                            key={idx}
                            ref={(el) => { inputRefs.current[idx] = el; }}
                            type="text"
                            inputMode="numeric"
                            autoComplete={idx === 0 ? "one-time-code" : "off"}
                            value={digit}
                            onChange={(e) => handleChange(idx, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(idx, e)}
                            className="w-full aspect-square min-w-0 text-center text-xl sm:text-2xl font-bold border border-border rounded-xl outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-surface"
                            maxLength={OTP_LENGTH}
                            required
                        />
                    ))}
                </div>

                <Button
                    type="submit"
                    disabled={codeDead}
                    className="w-full h-12 text-lg font-bold"
                >
                    Verify Code
                </Button>
            </form>

            <div className="mt-8 text-center text-sm">
                <p className="text-text-secondary mb-2">
                    {expiresIn > 0 ? (
                        <>
                            Code expires in{' '}
                            <span className="font-mono font-bold text-primary">{formatTime(expiresIn)}</span>
                        </>
                    ) : (
                        <span className="font-semibold text-amber-700">This code has expired.</span>
                    )}
                </p>
                <p className="text-text-secondary">
                    Didn&apos;t receive the code?{' '}
                    <button
                        type="button"
                        onClick={handleResend}
                        disabled={!canResend}
                        className={`font-bold transition-colors ${canResend ? 'text-primary hover:text-primary-dark' : 'text-text-muted cursor-not-allowed'}`}
                    >
                        {canResend ? 'Resend OTP' : `Resend in ${formatTime(resendIn)}`}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default function VerifyOTPPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center p-12 text-primary">Loading...</div>}>
            <VerifyOTPContent />
        </Suspense>
    );
}
