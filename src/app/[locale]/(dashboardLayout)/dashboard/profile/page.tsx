import Image from 'next/image';

export default function ProfilePage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">My Profile</h1>
            
            <div className="bg-surface border border-border rounded-xl shadow-sm p-6 md:p-8 max-w-3xl">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Avatar */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-border relative">
                            <Image 
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80" 
                                alt="Profile Avatar" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                        <button className="text-sm font-semibold text-primary hover:underline">Change Picture</button>
                    </div>

                    {/* Form */}
                    <form className="flex-grow w-full space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-1.5">First Name</label>
                                <input type="text" defaultValue="Rahim" className="w-full h-11 px-4 border border-border rounded-lg outline-none focus:border-primary bg-background" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-text-secondary mb-1.5">Last Name</label>
                                <input type="text" defaultValue="Uddin" className="w-full h-11 px-4 border border-border rounded-lg outline-none focus:border-primary bg-background" />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1.5">Email Address</label>
                            <input type="email" defaultValue="rahim@example.com" className="w-full h-11 px-4 border border-border rounded-lg outline-none focus:border-primary bg-background" />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1.5">Phone Number</label>
                            <input type="tel" defaultValue="+880 1712345678" className="w-full h-11 px-4 border border-border rounded-lg outline-none focus:border-primary bg-background" />
                        </div>

                        <div className="pt-4 border-t border-border flex justify-end">
                            <button type="button" className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg font-bold transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
