"use client";

import React from 'react';
import LocaleLink from '@/components/i18n/LocaleLink';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { forgetPassword } from '@/service/AuthService/AuthServiceAPi';
import tryCatchWrapper from '@/utils/tryCatchWrapper';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { FormInput } from "@/components/ui/CustomUi/ReuseForm/Form";
import { FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const forgotSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export default function ForgotPasswordPage() {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(forgotSchema),
        defaultValues: { email: "" },
    });

    const onSubmit = async (data: z.infer<typeof forgotSchema>) => {
        // const res = await tryCatchWrapper(forgetPassword, { body: data }, { toastLoadingMessage: "Sending OTP..." });

        // if (res?.success) {
        //     router.push('/verify-otp?type=reset&email=' + encodeURIComponent(data.email));
        // }
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <LocaleLink href="/sign-in" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary mb-6 transition-colors">
                <ArrowLeft size={16} /> Back to Sign In
            </LocaleLink>

            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Forgot Password? 🔒</h1>
                <p className="text-text-secondary leading-relaxed">
                    No worries, we&apos;ll send you a reset code. Please enter your email address.
                </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FieldGroup>
                    <FormInput
                        control={form.control}
                        name="email"
                        label="Email Address"
                        placeholder="user@example.com"
                    />
                </FieldGroup>

                <Button type="submit" className="w-full h-12 text-lg font-bold">
                    Send Reset Link
                </Button>
            </form>
        </div>
    );
}
