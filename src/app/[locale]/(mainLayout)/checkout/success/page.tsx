import LocaleLink from '@/components/i18n/LocaleLink';
import { CheckCircle, Truck, ArrowRight, UserPlus } from 'lucide-react';
import { getDictionary } from '@/i18n/dictionaries';

const CheckoutSuccessPage = async () => {
    const t = await getDictionary();
    const orderNumber = "ORD-7392-BD";

    return (
        <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
            
            <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mb-6 border-4 border-success/20">
                <CheckCircle size={40} />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                {t.checkoutSuccess.title}
            </h1>
            
            <p className="text-text-secondary text-center max-w-md mb-8">
                {t.checkoutSuccess.description}
            </p>

            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 w-full max-w-lg mb-8 shadow-sm">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
                    <div className="text-center sm:text-left">
                        <p className="text-sm text-text-secondary mb-1">{t.checkoutSuccess.orderNumber}</p>
                        <p className="text-lg font-bold text-foreground">{orderNumber}</p>
                    </div>
                    <div className="text-center sm:text-right">
                        <p className="text-sm text-text-secondary mb-1">{t.checkoutSuccess.expectedDelivery}</p>
                        <p className="text-lg font-bold text-primary flex items-center justify-center sm:justify-end gap-2">
                            <Truck size={18} />
                            {t.checkoutSuccess.expectedDeliveryTime}
                        </p>
                    </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-5 border border-primary/20 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                        <UserPlus size={24} />
                    </div>
                    <p className="text-sm text-foreground font-medium mb-4">
                        {t.checkoutSuccess.guestPrompt}
                    </p>
                    <LocaleLink href="/sign-up" className="px-6 py-2.5 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors w-full sm:w-auto">
                        {t.checkoutSuccess.createAccount}
                    </LocaleLink>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                <LocaleLink href="/track-order" className="flex-1 h-12 flex items-center justify-center gap-2 bg-foreground text-background font-bold rounded-lg hover:bg-foreground/90 transition-colors">
                    {t.checkoutSuccess.trackOrder} <ArrowRight size={18} />
                </LocaleLink>
                <LocaleLink href="/collections/best-sales" className="flex-1 h-12 flex items-center justify-center bg-surface border border-border text-foreground font-bold rounded-lg hover:border-primary/50 transition-colors">
                    {t.checkoutSuccess.continueShopping}
                </LocaleLink>
            </div>
            
        </div>
    );
};

export default CheckoutSuccessPage;
