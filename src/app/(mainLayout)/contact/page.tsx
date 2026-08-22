"use client";

import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h1>
                <p className="text-text-secondary max-w-2xl mx-auto">
                    Have a question, feedback, or need help with your order? We&apos;re here for you.
                    Reach out to us using any of the methods below.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div className="lg:w-1/3 space-y-8">
                    <div className="bg-surface border border-border p-6 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Our Office</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                House #12, Road #4, Sector 7,<br />
                                Uttara, Dhaka - 1230,<br />
                                Bangladesh
                            </p>
                        </div>
                    </div>

                    <div className="bg-surface border border-border p-6 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                            <p className="text-text-secondary text-sm">
                                +880 1234 567890<br />
                                +880 1987 654321
                            </p>
                        </div>
                    </div>

                    <div className="bg-surface border border-border p-6 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Email Address</h3>
                            <p className="text-text-secondary text-sm">
                                support@ecommerce.com<br />
                                info@ecommerce.com
                            </p>
                        </div>
                    </div>

                    <div className="bg-surface border border-border p-6 rounded-xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                            <p className="text-text-secondary text-sm">
                                Saturday - Thursday<br />
                                9:00 AM - 8:00 PM
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:w-2/3">
                    <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Your Name *</label>
                                    <input
                                        type="text"
                                        className="w-full h-12 px-4 border border-border rounded-md outline-none focus:border-primary transition-colors bg-background"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        className="w-full h-12 px-4 border border-border rounded-md outline-none focus:border-primary transition-colors bg-background"
                                        placeholder="01XXXXXXXXX"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full h-12 px-4 border border-border rounded-md outline-none focus:border-primary transition-colors bg-background"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-2">Message *</label>
                                <textarea
                                    rows={5}
                                    className="w-full p-4 border border-border rounded-md outline-none focus:border-primary transition-colors bg-background resize-none"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="px-8 h-12 bg-primary hover:bg-primary-dark text-white rounded-md font-bold transition-colors flex items-center justify-center gap-2">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
