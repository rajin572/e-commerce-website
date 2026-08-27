"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import LocaleLink from '@/components/i18n/LocaleLink';
import { ArrowLeft, CheckCircle2, Minus, Plus } from 'lucide-react';
import { useT } from '@/components/i18n/DictionaryProvider';
import { AllImages } from '../../../../../public/images/AllImages';

const formatPrice = (amount: number) => `৳${amount}`;

const CheckoutPage = () => {
    const t = useT();
    const [deliveryMethod, setDeliveryMethod] = useState('inside_dhaka');
    const [paymentMethod, setPaymentMethod] = useState('cod');

    const subtotal = 1450;
    const shipping = deliveryMethod === 'inside_dhaka' ? 60 : 120;
    const total = subtotal + shipping;

    return (
        <div className="container mx-auto px-4 py-8">
            <LocaleLink href="/cart" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary mb-6 transition-colors">
                <ArrowLeft size={16} /> {t.checkout.backToCart}
            </LocaleLink>
            
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{t.checkout.title}</h1>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left Column: Form */}
                <div className="lg:w-3/5 space-y-8">
                    
                    {/* Customer Info */}
                    <div className="bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] rounded-2xl p-6 md:p-8">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                </div>
                                <h2 className="text-xl font-bold text-foreground">{t.checkout.customerInfo}</h2>
                            </div>
                            <LocaleLink href="/sign-in" className="text-sm text-primary hover:text-primary-dark hover:underline font-semibold transition-colors">{t.checkout.haveAccount}</LocaleLink>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="md:col-span-2">
                                <label className="block text-[13px] font-semibold text-text-secondary mb-1.5">{t.checkout.fullName}</label>
                                <input type="text" className="w-full h-12 px-4 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" placeholder={t.checkout.fullNamePlaceholder} />
                            </div>
                            <div>
                                <label className="block text-[13px] font-semibold text-text-secondary mb-1.5">{t.checkout.phone}</label>
                                <input type="tel" className="w-full h-12 px-4 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" placeholder={t.checkout.phonePlaceholder} />
                            </div>
                            <div>
                                <label className="block text-[13px] font-semibold text-text-secondary mb-1.5">{t.checkout.email}</label>
                                <input type="email" className="w-full h-12 px-4 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all" placeholder={t.checkout.emailPlaceholder} />
                            </div>
                        </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] rounded-2xl p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <h2 className="text-xl font-bold text-foreground">{t.checkout.deliveryAddress}</h2>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <label className="block text-[13px] font-semibold text-text-secondary mb-1.5">{t.checkout.fullAddress}</label>
                                <textarea rows={3} className="w-full p-4 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none" placeholder={t.checkout.fullAddressPlaceholder}></textarea>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-[13px] font-semibold text-text-secondary mb-1.5">{t.checkout.city}</label>
                                    <select className="w-full h-12 px-4 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer">
                                        <option value="">{t.checkout.cityPlaceholder}</option>
                                        <option value="dhaka">Dhaka</option>
                                        <option value="chattogram">Chattogram</option>
                                        <option value="sylhet">Sylhet</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[13px] font-semibold text-text-secondary mb-1.5">{t.checkout.zone}</label>
                                    <select className="w-full h-12 px-4 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none cursor-pointer">
                                        <option value="">{t.checkout.zonePlaceholder}</option>
                                        <option value="mirpur">Mirpur</option>
                                        <option value="gulshan">Gulshan</option>
                                        <option value="dhanmondi">Dhanmondi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Delivery Method */}
                    <div className="bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] rounded-2xl p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                            </div>
                            <h2 className="text-xl font-bold text-foreground">{t.checkout.deliveryMethod}</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label className={`flex flex-col p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 ${deliveryMethod === 'inside_dhaka' ? 'border-primary bg-primary/5 shadow-sm scale-[1.02] z-10' : 'border-gray-200 hover:border-primary/40 hover:bg-gray-50'}`}>
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center ${deliveryMethod === 'inside_dhaka' ? 'border-primary' : 'border-gray-300'}`}>
                                        {deliveryMethod === 'inside_dhaka' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                    </div>
                                    <span className="font-bold text-lg text-primary">{formatPrice(60)}</span>
                                </div>
                                <div>
                                    <p className="font-bold text-foreground text-[15px]">{t.checkout.insideDhaka}</p>
                                    <p className="text-[12px] text-text-secondary mt-1 leading-tight">{t.checkout.insideDhakaDesc}</p>
                                </div>
                                <input type="radio" name="delivery" value="inside_dhaka" className="hidden" checked={deliveryMethod === 'inside_dhaka'} onChange={() => setDeliveryMethod('inside_dhaka')} />
                            </label>
                            
                            <label className={`flex flex-col p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 ${deliveryMethod === 'outside_dhaka' ? 'border-primary bg-primary/5 shadow-sm scale-[1.02] z-10' : 'border-gray-200 hover:border-primary/40 hover:bg-gray-50'}`}>
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center ${deliveryMethod === 'outside_dhaka' ? 'border-primary' : 'border-gray-300'}`}>
                                        {deliveryMethod === 'outside_dhaka' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                    </div>
                                    <span className="font-bold text-lg text-primary">{formatPrice(120)}</span>
                                </div>
                                <div>
                                    <p className="font-bold text-foreground text-[15px]">{t.checkout.outsideDhaka}</p>
                                    <p className="text-[12px] text-text-secondary mt-1 leading-tight">{t.checkout.outsideDhakaDesc}</p>
                                </div>
                                <input type="radio" name="delivery" value="outside_dhaka" className="hidden" checked={deliveryMethod === 'outside_dhaka'} onChange={() => setDeliveryMethod('outside_dhaka')} />
                            </label>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] rounded-2xl p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                            </div>
                            <h2 className="text-xl font-bold text-foreground">{t.checkout.paymentMethod}</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                            {/* COD Card */}
                            <label className={`relative overflow-hidden flex flex-col items-center justify-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 ${paymentMethod === 'cod' ? 'border-[#10B981] bg-[#10B981]/5 shadow-sm scale-[1.02] z-10' : 'border-gray-200 hover:border-[#10B981]/40 hover:bg-gray-50'}`}>
                                {paymentMethod === 'cod' && (
                                    <div className="absolute top-2.5 right-2.5 text-[#10B981] animate-in zoom-in duration-200">
                                        <CheckCircle2 size={18} className="fill-[#10B981]/20" />
                                    </div>
                                )}
                                <div className={`w-12 h-12 mb-3 rounded-full flex items-center justify-center transition-colors ${paymentMethod === 'cod' ? 'bg-[#10B981] text-white shadow-md shadow-[#10B981]/20' : 'bg-gray-100 text-gray-500'}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                </div>
                                <p className="font-bold text-foreground text-center text-[15px]">{t.checkout.codTitle || 'Cash on Delivery (COD)'}</p>
                                <p className="text-[12px] text-text-secondary text-center mt-1 leading-tight">{t.checkout.codSub || 'Pay when you receive your order'}</p>
                                <input type="radio" name="payment" value="cod" className="hidden" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                            </label>

                            {/* bKash Card */}
                            <label className={`relative overflow-hidden flex flex-col items-center justify-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 ${paymentMethod === 'bkash' ? 'border-[#E11471] bg-[#E11471]/5 shadow-sm scale-[1.02] z-10' : 'border-gray-200 hover:border-[#E11471]/40 hover:bg-gray-50'}`}>
                                {paymentMethod === 'bkash' && (
                                    <div className="absolute top-2.5 right-2.5 text-[#E11471] animate-in zoom-in duration-200">
                                        <CheckCircle2 size={18} className="fill-[#E11471]/20" />
                                    </div>
                                )}
                                <div className={`w-14 h-14 mb-3 rounded-xl flex items-center justify-center transition-colors overflow-hidden ${paymentMethod === 'bkash' ? 'border-2 border-[#E11471] bg-white shadow-md shadow-[#E11471]/20' : 'bg-white border border-gray-200'}`}>
                                    <Image src={AllImages.bkashLogo} alt="bKash" className="w-full h-full object-contain p-2" />
                                </div>
                                <p className="font-bold text-foreground text-center text-[15px]">{t.checkout.bkashTitle || 'bKash'}</p>
                                <p className="text-[12px] text-text-secondary text-center mt-1 leading-tight">{t.checkout.bkashSub || 'Pay securely with bKash'}</p>
                                <input type="radio" name="payment" value="bkash" className="hidden" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} />
                            </label>

                            {/* Nagad Card */}
                            <label className={`relative overflow-hidden flex flex-col items-center justify-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 ${paymentMethod === 'nagad' ? 'border-[#F37021] bg-[#F37021]/5 shadow-sm scale-[1.02] z-10' : 'border-gray-200 hover:border-[#F37021]/40 hover:bg-gray-50'}`}>
                                {paymentMethod === 'nagad' && (
                                    <div className="absolute top-2.5 right-2.5 text-[#F37021] animate-in zoom-in duration-200">
                                        <CheckCircle2 size={18} className="fill-[#F37021]/20" />
                                    </div>
                                )}
                                <div className={`w-14 h-14 mb-3 rounded-xl flex items-center justify-center transition-colors overflow-hidden ${paymentMethod === 'nagad' ? 'border-2 border-[#F37021] bg-white shadow-md shadow-[#F37021]/20' : 'bg-white border border-gray-200'}`}>
                                    <Image src={AllImages.nagadLogo} alt="Nagad" className="w-full h-full object-contain p-2" />
                                </div>
                                <p className="font-bold text-foreground text-center text-[15px]">{t.checkout.nagadTitle || 'Nagad'}</p>
                                <p className="text-[12px] text-text-secondary text-center mt-1 leading-tight">{t.checkout.nagadSub || 'Pay securely with Nagad'}</p>
                                <input type="radio" name="payment" value="nagad" className="hidden" checked={paymentMethod === 'nagad'} onChange={() => setPaymentMethod('nagad')} />
                            </label>
                        </div>
                    </div>

                    {/* Dynamic Payment Instructions */}
                    {(paymentMethod === 'bkash' || paymentMethod === 'nagad') && (
                        <div className="bg-white border border-[#10B981] rounded-lg p-6 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded bg-[#10B981]/10 text-[#10B981] flex items-center justify-center">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    </div>
                                    <h3 className="font-bold text-foreground">
                                        {(t.checkout.paymentInstructions || '{method} Payment Instructions').replace('{method}', paymentMethod === 'bkash' ? 'bKash' : 'Nagad')}
                                    </h3>
                                </div>
                                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${paymentMethod === 'bkash' ? 'bg-[#E11471]/10 text-[#E11471]' : 'bg-[#F37021]/10 text-[#F37021]'}`}>
                                    {t.checkout.personalSendMoney || 'Personal (Send Money)'}
                                </span>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#10B981]/5 border border-[#10B981]/30 rounded-lg mb-6 gap-4">
                                <div>
                                    <p className="text-[11px] font-bold text-text-secondary uppercase tracking-wider mb-1">
                                        {(t.checkout.sendMoneyTo || 'SEND MONEY TO THIS {method} NUMBER').replace('{method}', paymentMethod === 'bkash' ? 'BKASH' : 'NAGAD')}
                                    </p>
                                    <p className="text-2xl font-bold text-[#10B981]">01850347720</p>
                                </div>
                                <button type="button" className="flex items-center gap-2 px-4 py-2 bg-white border border-[#10B981]/50 text-[#10B981] rounded-md font-semibold text-sm hover:bg-[#10B981]/10 transition-colors shrink-0">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                    {t.checkout.copy || 'Copy'}
                                </button>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center gap-1.5 mb-3 text-text-secondary font-semibold text-sm">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                                    {t.checkout.howToPay || 'How to pay:'}
                                </div>
                                <ul className="space-y-2 text-[13px] text-text-secondary">
                                    <li>{(t.checkout.step1 || '1. Open the {method} app or dial {dial}.').replace('{method}', paymentMethod === 'bkash' ? 'bKash' : 'Nagad').replace('{dial}', paymentMethod === 'bkash' ? '*247#' : '*167#')}</li>
                                    <li>{t.checkout.step2 || "2. Select 'Send Money'."}</li>
                                    <li>{t.checkout.step3 || "3. Send the exact amount to the number below."}</li>
                                    <li>{t.checkout.step4 || "4. Copy the Transaction ID (TrxID) from the confirmation."}</li>
                                    <li>{t.checkout.step5 || "5. Enter your number and the TrxID in the form below."}</li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t border-gray-100">
                                <div>
                                    <label className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                                        {(t.checkout.yourNumber || 'Your {method} Number').replace('{method}', paymentMethod === 'bkash' ? 'bKash' : 'Nagad')}
                                    </label>
                                    <input type="text" className="w-full h-11 px-3 border border-border rounded-md outline-none focus:border-primary transition-colors text-sm" placeholder={t.checkout.yourNumberPlaceholder || '017XXXXXXXX'} />
                                </div>
                                <div>
                                    <label className="flex items-center gap-1.5 text-sm font-semibold text-foreground mb-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                        {t.checkout.trxIdLabel || 'Transaction ID (TrxID)'}
                                    </label>
                                    <input type="text" className="w-full h-11 px-3 border border-border rounded-md outline-none focus:border-primary transition-colors text-sm" placeholder={t.checkout.trxIdPlaceholder || 'E.G. 9J7A6X8Y2Z'} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:w-2/5">
                    <div className="bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-2xl p-6 md:p-8 sticky top-32">
                        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                            {t.checkout.orderReview}
                        </h2>
                        
                        {/* Items */}
                        <div className="space-y-4 mb-6 pb-6 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                            <div className="flex gap-4 items-center bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                                <div className="w-16 h-16 bg-white rounded-lg border border-gray-100 flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1587049352847-4d4b1a4574a7?w=100&h=100&fit=crop" alt="Sundarban Honey" fill className="object-cover" />
                                </div>
                                <div className="flex-grow flex flex-col justify-center">
                                    <h4 className="text-[13px] font-bold line-clamp-2 leading-snug text-foreground">সুন্দরবনের প্রাকৃতিক চাকের মধু (Sundarban Honey)</h4>
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="text-[11px] font-semibold text-text-secondary bg-gray-200/50 px-2 py-0.5 rounded">1 kg x 1</p>
                                        <span className="text-primary font-bold text-[14px]">{formatPrice(850)}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex gap-4 items-center bg-gray-50/50 p-3 rounded-xl border border-gray-100">
                                <div className="w-16 h-16 bg-white rounded-lg border border-gray-100 flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden">
                                    <Image src="https://images.unsplash.com/photo-1589301773112-007137626922?w=100&h=100&fit=crop" alt="Gawa Ghee" fill className="object-cover" />
                                </div>
                                <div className="flex-grow flex flex-col justify-center">
                                    <h4 className="text-[13px] font-bold line-clamp-2 leading-snug text-foreground">গাওয়া ঘি (Gawa Ghee)</h4>
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="text-[11px] font-semibold text-text-secondary bg-gray-200/50 px-2 py-0.5 rounded">500g x 1</p>
                                        <span className="text-primary font-bold text-[14px]">{formatPrice(600)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coupon */}
                        <div className="mb-6">
                            <label className="block text-[13px] font-semibold text-text-secondary mb-2">{t.checkout.coupon}</label>
                            <div className="flex gap-2">
                                <input type="text" className="flex-grow h-12 px-4 bg-gray-50/50 border border-gray-200 rounded-xl outline-none focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all uppercase text-sm font-medium tracking-wide" placeholder="ENTER CODE" />
                                <button type="button" className="px-6 bg-gray-900 hover:bg-black text-white rounded-xl font-bold text-sm transition-colors shadow-md">{t.checkout.apply}</button>
                            </div>
                        </div>

                        {/* Calculation */}
                        <div className="bg-gray-50/50 border border-gray-100 rounded-xl p-5 space-y-3.5 mb-6 text-[14px]">
                            <div className="flex justify-between font-medium text-text-secondary">
                                <span>{t.checkout.subtotal}</span>
                                <span className="text-foreground">{formatPrice(subtotal)}</span>
                            </div>
                            <div className="flex justify-between font-medium text-text-secondary">
                                <span>{t.checkout.shipping}</span>
                                <span className="text-foreground">{formatPrice(shipping)}</span>
                            </div>
                            <div className="flex justify-between font-medium text-primary">
                                <span>{t.checkout.discount}</span>
                                <span>- {formatPrice(30)}</span>
                            </div>
                            
                            <div className="flex justify-between items-center text-lg font-bold text-foreground pt-3.5 border-t border-gray-200 mt-2">
                                <span>{t.checkout.total}</span>
                                <span className="text-primary text-2xl drop-shadow-sm">{formatPrice(total)}</span>
                            </div>
                        </div>

                        <label className="flex items-start gap-3 mb-6 cursor-pointer p-4 bg-primary/5 rounded-xl border border-primary/20">
                            <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" required />
                            <span className="text-[12px] text-text-secondary leading-snug">
                                {t.checkout.termsStart} <LocaleLink href="/terms" className="text-primary hover:underline font-semibold">{t.checkout.terms}</LocaleLink> {t.checkout.and} <LocaleLink href="/privacy" className="text-primary hover:underline font-semibold">{t.checkout.privacy}</LocaleLink>.
                            </span>
                        </label>
                        
                        <LocaleLink href="/checkout/success" className="w-full h-14 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0">
                            {t.checkout.placeOrder}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </LocaleLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
