import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/Sidebar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "my clients' dashboard",
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
      <body className={`${WorkSans.className} flex items-center justify-between`}>
        <Sidebar />
        <main className="w-full h-full p-4">
        {children}
        </main>
      </body>    
    </html>
  );
}
