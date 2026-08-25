import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://support.tabot.app"),
  title: {
    default: "Tabot Support | Faith & Community",
    template: "%s | Tabot Support",
  },
  description:
    "Support, privacy information, and account deletion for Tabot, the Ethiopian Orthodox Tewahedo faith and community app.",
  openGraph: {
    title: "Tabot Support",
    description: "Faith, community, and support—together.",
    type: "website",
    images: ["/hero-tabot.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
