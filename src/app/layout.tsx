import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation/Navigation";
import { Footer } from "@/components/layout/Footer/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});
export const metadata: Metadata = {
  title: "Happy design portfolio",
  description: "Happy Colors Single-page design portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} text-base-content text-bodyS md:text-bodyM bg-base-100 `}
      >
        <Navigation />
        {children}

        <Footer />
      </body>
    </html>
  );
}
