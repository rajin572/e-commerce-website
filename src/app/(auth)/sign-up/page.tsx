"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/service/AuthService/AuthServiceAPi';
import tryCatchWrapper from '@/utils/tryCatchWrapper';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { FormInput, FormPassword } from "@/components/ui/CustomUi/ReuseForm/Form";
import { FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const signUpSchema = z.object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function SignUpPage() {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: { name: "", phone: "", email: "", password: "" },
    });

    const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
        // const res = await tryCatchWrapper(registerUser, { body: data }, { toastLoadingMessage: "Sending OTP..." });

        // if (res?.success) {
        //     // The pending signup is held server-side in an httpOnly cookie.
        //     router.push('/verify-otp?type=signup&email=' + encodeURIComponent(data.email));
        // }
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Create Account ✨</h1>
                <p className="text-text-secondary">Join us to get started.</p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FieldGroup>
                    <FormInput
                        control={form.control}
                        name="name"
                        label="Full Name"
                        placeholder="John Doe"
                    />

                    <FormInput
                        control={form.control}
                        name="phone"
                        label="Phone Number"
                        placeholder="+880 1..."
                    />

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

                <Button type="submit" className="w-full h-12 text-lg font-bold mt-4">
                    Create Account
                </Button>
            </form>

            <div className="mt-8 text-center text-sm text-text-secondary">
                Already have an account?{' '}
                <Link href="/sign-in" className="text-primary font-bold hover:underline transition-colors">
                    Sign In
                </Link>
            </div>
        </div>
    );
}
