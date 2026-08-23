"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { resetPassword } from '@/service/AuthService/AuthServiceAPi';
import tryCatchWrapper from '@/utils/tryCatchWrapper';
import { toast } from 'sonner';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { FormPassword } from "@/components/ui/CustomUi/ReuseForm/Form";
import { FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const resetSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export default function ResetPasswordPage() {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(resetSchema),
        defaultValues: { password: "", confirmPassword: "" },
    });

    const onSubmit = async (data: z.infer<typeof resetSchema>) => {
        // The reset token is held server-side in an httpOnly cookie set by
        // verifyForgotOtp — resetPassword reads it there.
        // const res = await tryCatchWrapper(
        //     resetPassword,
        //     { body: { newPassword: data.password } },
        //     { toastLoadingMessage: "Resetting Password..." }
        // );

        // if (res?.success) {
        //     toast.success("Password reset successfully. Please sign in.");
        //     router.push('/sign-in');
        // }
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Set New Password 🔐</h1>
                <p className="text-text-secondary leading-relaxed">
                    Your new password must be different to previously used passwords.
                </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FieldGroup>
                    <FormPassword
                        control={form.control}
                        name="password"
                        label="New Password"
                        placeholder="••••••••"
                    />

                    <FormPassword
                        control={form.control}
                        name="confirmPassword"
                        label="Confirm Password"
                        placeholder="••••••••"
                    />
                </FieldGroup>

                <Button type="submit" className="w-full h-12 text-lg font-bold mt-4">
                    Reset Password
                </Button>
            </form>
        </div>
    );
}
