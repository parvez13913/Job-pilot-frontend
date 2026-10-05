import type { Metadata } from "next";
import "./globals.css";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "JobPilot",
  description: "AI-powered job application assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans`}>{children}</body>
    </html>
  );
}
