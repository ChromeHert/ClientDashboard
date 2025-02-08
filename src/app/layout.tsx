import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Admin Dashboard",
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
          <div className="flex">
            <div className="hidden md:block h-[100vh] w-[300px]">
              <Sidebar />
            </div>
            <div className="p-5 w-full md:max-w-[1140px]">
          {children}
            </div>
          </div>
        </main>
      </body>    
    </html>
  );
}
