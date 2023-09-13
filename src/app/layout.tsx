import "./globals.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation/Navigation";
import { Footer } from "@/components/layout/Footer/Footer";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});
export const metadata: Metadata = {
  title: "Happy design portfolio",
  description: "Happy Colors Single-page design portfolio",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.className} text-base-content text-bodyS md:text-bodyM bg-base-100 `}
      >
        <Navigation />
        {children}

        <Footer />
      </body>
    </html>
  );
}
