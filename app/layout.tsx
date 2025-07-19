import type { Metadata } from "next";
import "./globals.css";
import favIcon from "@/app/assets/favicon.png";

export const metadata: Metadata = {
  title: "Neov",
  description: "Investing in the future",
  icons: {
    icon: favIcon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
