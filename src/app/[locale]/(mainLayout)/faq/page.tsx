"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQS = [
    {
        question: "Is your honey 100% natural?",
        answer: "Yes, our honey is 100% natural and collected directly from the Sundarbans. We do not add any sugar, preservatives, or artificial flavors. It undergoes strict quality testing to ensure purity."
    },
    {
        question: "How long does delivery take?",
        answer: "For orders inside Dhaka, delivery typically takes 1-2 business days. For orders outside Dhaka, it takes 3-5 business days depending on the courier service."
    },
    {
        question: "What is your return policy?",
        answer: "If you receive a damaged or incorrect product, you can return it within 3 days of delivery. Please ensure the product is unopened and in its original packaging. Contact our support team to initiate a return."
    },
    {
        question: "Do you offer cash on delivery (COD)?",
        answer: "Yes, we offer Cash on Delivery (COD) across Bangladesh. You can also pay securely online using bKash, Nagad, or Debit/Credit cards."
    },
    {
        question: "Are your products organic?",
        answer: "Most of our products are organically sourced from traditional farmers who do not use harmful pesticides or chemicals. We prioritize natural farming methods for all ECommerce products."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    Find answers to common questions about our products, delivery, and services.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {FAQS.map((faq, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-primary bg-primary/5' : 'border-border bg-surface hover:border-primary/50'}`}
                    >
                        <button
                            className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-foreground"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="pr-4">{faq.question}</span>
                            {openIndex === index ? <ChevronUp size={20} className="text-primary shrink-0" /> : <ChevronDown size={20} className="text-text-muted shrink-0" />}
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="px-6 pb-5 text-text-secondary leading-relaxed">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-text-secondary">Still have questions?</p>
                <a href="/contact" className="text-primary font-bold hover:underline mt-2 inline-block">Contact our support team</a>
            </div>
        </div>
    );
}
