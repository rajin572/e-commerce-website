import React from "react";
import FAQSection from "@/components/home/FAQSection";

export const metadata = {
  title: "FAQ | E-commerce",
  description: "Frequently Asked Questions",
};

export default function FAQPage() {
    return (
        <main className="min-h-screen py-10 bg-background">
            <FAQSection />
        </main>
    );
}
