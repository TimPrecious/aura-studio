// This file wraps EVERY page. It holds the font and the page title.
import { Inter } from "next/font/google";
import "./globals.css";

// Load the Inter font from Google
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// The title and description shown in the browser tab and on Google
export const metadata = {
  title: "Aura Studio | Branding, UI/UX & Web Design",
  description:
    "Aura Studio is a London-based creative agency specializing in Branding, UI/UX Design, and Web Design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}