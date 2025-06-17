import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayman Hassen - Portfolio",
  description: "People. Product. Ops. I ship what matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
