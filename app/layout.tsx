
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";




export const metadata: Metadata = {
  title: "The Daily Bulletin",
  description: "The Daily Bulletin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <Footer/>
      </body>
    </html>
  );
}
