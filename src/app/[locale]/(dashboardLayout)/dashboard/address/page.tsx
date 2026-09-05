import { MapPin, Plus, Edit, Trash2 } from 'lucide-react';

export default function AddressPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Saved Addresses</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold text-sm transition-colors">
                    <Plus size={16} /> Add New
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Default Address */}
                <div className="bg-surface border-2 border-primary/20 rounded-xl p-6 shadow-sm relative">
                    <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">Default</span>
                    <div className="flex items-start gap-3 mb-4">
                        <div className="mt-1 text-primary"><MapPin size={20} /></div>
                        <div>
                            <h3 className="font-bold text-foreground">Home Address</h3>
                            <p className="text-sm text-text-secondary mt-1">Rahim Uddin<br />+880 1712345678</p>
                        </div>
                    </div>
                    <p className="text-sm text-text-secondary mb-6 pl-8">
                        House #12, Road #4, Sector 7<br />
                        Uttara, Dhaka - 1230
                    </p>
                    <div className="flex gap-3 pl-8">
                        <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"><Edit size={14} /> Edit</button>
                        <button className="text-sm font-semibold text-destructive hover:underline flex items-center gap-1"><Trash2 size={14} /> Delete</button>
                    </div>
                </div>

                {/* Office Address */}
                <div className="bg-surface border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-3 mb-4">
                        <div className="mt-1 text-text-muted"><MapPin size={20} /></div>
                        <div>
                            <h3 className="font-bold text-foreground">Office</h3>
                            <p className="text-sm text-text-secondary mt-1">Rahim Uddin<br />+880 1712345678</p>
                        </div>
                    </div>
                    <p className="text-sm text-text-secondary mb-6 pl-8">
                        Level 4, SEL HUQ SKYPARK<br />
                        23/2 Mirpur Road, Dhaka - 1207
                    </p>
                    <div className="flex gap-3 pl-8">
                        <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"><Edit size={14} /> Edit</button>
                        <button className="text-sm font-semibold text-destructive hover:underline flex items-center gap-1"><Trash2 size={14} /> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
