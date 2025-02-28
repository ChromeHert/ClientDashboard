import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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
      <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={true}
          storageKey='dashboard-theme'
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
