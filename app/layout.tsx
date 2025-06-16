import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio de mixage et de mastering",
  description: "Studio de mixage et de mastering",
  generator: "Studio de mixage et de mastering",
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
