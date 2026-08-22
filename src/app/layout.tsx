import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "E-commerce - Modern E-commerce",
  description: "E-commerce is a scalable modern e-commerce platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
        {/* tryCatchWrapper drives every mutation toast through sonner. */}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
