import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow pt-[70px] lg:pt-[112px] md:pb-0 pb-[60px]">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
