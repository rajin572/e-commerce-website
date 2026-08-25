"use client";

import React from 'react';
import LocaleLink from '@/components/i18n/LocaleLink';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { AllImages } from '../../../public/images/AllImages';

const Footer = () => {
    return (
        <footer className="bg-secondary text-primary-foreground pt-12 pb-24 md:pb-6 border-t-4 border-primary">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <LocaleLink href="/" className="inline-block mb-4">
                            <Image
                                src={AllImages.logo}
                                alt="ECommerce"
                                width={120}
                                height={40}
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </LocaleLink>
                        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                            ১০০% প্রাকৃতিক ও স্বাস্থ্যকর খাবার পৌঁছে দেওয়াই আমাদের লক্ষ্য। আমাদের প্রতিটি পণ্য যত্ন সহকারে প্রক্রিয়াজাত করা হয়।
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <FaFacebook size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <FaInstagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <FaYoutube size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <FaTwitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Information</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-300">
                            <li><LocaleLink href="/about" className="hover:text-primary transition-colors">About Us</LocaleLink></li>
                            <li><LocaleLink href="/contact" className="hover:text-primary transition-colors">Contact Us</LocaleLink></li>
                            <li><LocaleLink href="/blog" className="hover:text-primary transition-colors">Blog</LocaleLink></li>
                            <li><LocaleLink href="/careers" className="hover:text-primary transition-colors">Careers</LocaleLink></li>
                        </ul>
                    </div>

                    {/* Shop By */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Shop By</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-300">
                            <li><LocaleLink href="/category/honey" className="hover:text-primary transition-colors">Honey</LocaleLink></li>
                            <li><LocaleLink href="/category/ghee" className="hover:text-primary transition-colors">Ghee</LocaleLink></li>
                            <li><LocaleLink href="/category/spices" className="hover:text-primary transition-colors">Spices</LocaleLink></li>
                            <li><LocaleLink href="/collections/combos" className="hover:text-primary transition-colors">Combo Offers</LocaleLink></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Support</h4>
                        <ul className="flex flex-col gap-2 text-sm text-gray-300">
                            <li><LocaleLink href="/track-order" className="hover:text-primary transition-colors">Track Order</LocaleLink></li>
                            <li><LocaleLink href="/faq" className="hover:text-primary transition-colors">FAQ</LocaleLink></li>
                            <li><LocaleLink href="/return-policy" className="hover:text-primary transition-colors">Return Policy</LocaleLink></li>
                            <li><LocaleLink href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</LocaleLink></li>
                            <li><LocaleLink href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</LocaleLink></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
                        <ul className="flex flex-col gap-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>+880 1234 567890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>support@ecommerce.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} ECommerce. All Rights Reserved.</p>
                    <div className="flex gap-4">
                        <Image src="https://placehold.co/50x30/F9FAFB/1F2937?text=Visa" alt="Visa" width={50} height={30} className="rounded" />
                        <Image src="https://placehold.co/50x30/F9FAFB/1F2937?text=Mastercard" alt="Mastercard" width={50} height={30} className="rounded" />
                        <Image src="https://placehold.co/50x30/F9FAFB/1F2937?text=bKash" alt="bKash" width={50} height={30} className="rounded" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;