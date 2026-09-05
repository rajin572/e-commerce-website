"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Camera, KeyRound, User } from "lucide-react";
// import { updateProfile, changePassword } from '@/service/AuthService/AuthServiceAPi';
// import tryCatchWrapper from '@/utils/tryCatchWrapper';
import { FormInput, FormPassword } from "@/components/ui/CustomUi/ReuseForm/Form";
import { FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const personalInfoSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    phone: z.string().min(10, "A valid phone number is required"),
});

const passwordSchema = z
    .object({
        currentPassword: z.string().min(1, "Current password is required"),
        newPassword: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().min(6, "Confirm your new password"),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80";

export default function ProfileClient() {
    const [avatarPreview, setAvatarPreview] = useState(DEFAULT_AVATAR);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const infoForm = useForm({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: { firstName: "Rahim", lastName: "Uddin", email: "rahim@example.com", phone: "+880 1712345678" },
    });

    const passwordForm = useForm({
        resolver: zodResolver(passwordSchema),
        defaultValues: { currentPassword: "", newPassword: "", confirmPassword: "" },
    });

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setAvatarPreview(URL.createObjectURL(file));
    };

    const onSaveInfo = async (data: z.infer<typeof personalInfoSchema>) => {
        // FIXME: API integration temporarily commented out for UI testing
        // await tryCatchWrapper(updateProfile, { body: data }, { toastLoadingMessage: "Saving changes..." });
        console.log("Profile updated", data);
        toast.success("Profile updated successfully");
    };

    const onChangePassword = async (data: z.infer<typeof passwordSchema>) => {
        // FIXME: API integration temporarily commented out for UI testing
        // await tryCatchWrapper(changePassword, { body: data }, { toastLoadingMessage: "Updating password..." });
        console.log("Password changed", data);
        toast.success("Password updated successfully");
        passwordForm.reset();
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">My Profile</h1>
                <p className="text-sm text-text-secondary mt-1">Manage your personal information and security.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 p-6 md:p-8 max-w-3xl">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <User size={18} />
                    </div>
                    <h2 className="text-lg font-bold text-foreground">Personal Information</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex flex-col items-center gap-3 mx-auto md:mx-0">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-border relative">
                            <Image src={avatarPreview} alt="Profile Avatar" fill className="object-cover" />
                        </div>
                        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="text-sm font-semibold text-primary hover:underline flex items-center gap-1.5"
                        >
                            <Camera size={14} /> Change Picture
                        </button>
                    </div>

                    <form onSubmit={infoForm.handleSubmit(onSaveInfo)} className="flex-grow w-full space-y-5">
                        <FieldGroup>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <FormInput control={infoForm.control} name="firstName" label="First Name" />
                                <FormInput control={infoForm.control} name="lastName" label="Last Name" />
                            </div>
                            <FormInput control={infoForm.control} name="email" label="Email Address" type="email" />
                            <FormInput control={infoForm.control} name="phone" label="Phone Number" type="tel" />
                        </FieldGroup>

                        <div className="pt-4 border-t border-gray-100 flex justify-end">
                            <Button type="submit" className="px-6 font-bold">Save Changes</Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-gray-100 p-6 md:p-8 max-w-3xl">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <KeyRound size={18} />
                    </div>
                    <h2 className="text-lg font-bold text-foreground">Change Password</h2>
                </div>

                <form onSubmit={passwordForm.handleSubmit(onChangePassword)} className="space-y-5 max-w-md">
                    <FieldGroup>
                        <FormPassword control={passwordForm.control} name="currentPassword" label="Current Password" placeholder="••••••••" />
                        <FormPassword control={passwordForm.control} name="newPassword" label="New Password" placeholder="••••••••" />
                        <FormPassword control={passwordForm.control} name="confirmPassword" label="Confirm New Password" placeholder="••••••••" />
                    </FieldGroup>

                    <div className="pt-2 flex justify-end">
                        <Button type="submit" className="px-6 font-bold">Update Password</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
