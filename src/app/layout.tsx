import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/Sidebar";
import { Header } from "@/components/Header";
import Navbar from "@/components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "control panel",
  description: "Admin  Dashboard",
};

const WorkSans = Work_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${WorkSans.className} `}>
        <main className="">
          <Navbar />
        {children}
        </main>
      </body>    
    </html>
  );
}
