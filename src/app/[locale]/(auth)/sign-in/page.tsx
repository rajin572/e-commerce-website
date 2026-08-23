"use client";

import React from 'react';
import LocaleLink from '@/components/i18n/LocaleLink';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/service/AuthService/AuthServiceAPi';
import tryCatchWrapper from '@/utils/tryCatchWrapper';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { FormInput, FormPassword } from "@/components/ui/CustomUi/ReuseForm/Form";
import { FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const signInSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
});

export default function SignInPage() {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues: { email: "", password: "" },
    });

    const onSubmit = async (data: z.infer<typeof signInSchema>) => {
        // const res = await tryCatchWrapper(loginUser, { body: data }, { toastLoadingMessage: "Signing in..." });

        // if (res?.success) {
        //     // loginUser sets the session cookies server-side and rejects non-customer roles.
        //     router.push('/');
        //     router.refresh();
        // }
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back! 👋</h1>
                <p className="text-text-secondary">Please sign in to your account.</p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FieldGroup>
                    <FormInput
                        control={form.control}
                        name="email"
                        label="Email Address"
                        placeholder="e.g. user@example.com"
                    />

                    <FormPassword
                        control={form.control}
                        name="password"
                        label="Password"
                        placeholder="••••••••"
                    />
                </FieldGroup>

                <div className="flex justify-between items-center -mt-2">
                    <div />
                    <LocaleLink href="/forgot-password" className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors">
                        Forgot Password?
                    </LocaleLink>
                </div>

                <Button type="submit" className="w-full h-12 text-lg font-bold">
                    Sign In
                </Button>
            </form>

            <div className="mt-8 text-center text-sm text-text-secondary">
                Don&apos;t have an account?{' '}
                <LocaleLink href="/sign-up" className="text-primary font-bold hover:underline transition-colors">
                    Create Account
                </LocaleLink>
            </div>
        </div>
    );
}
