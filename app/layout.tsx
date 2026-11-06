import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/600.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "@fontsource/archivo/900.css";
import "@fontsource/lora/400.css";
import "@fontsource/lora/500.css";
import "@fontsource/lora/400-italic.css";
import "@fontsource/lora/500-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eightarc.com"),
  title: {
    default: "EightArc | Software, AI & Data Analytics",
    template: "%s | EightArc",
  },
  description:
    "Software development, AI and LLM applications, machine learning, reinforcement learning, data analytics, technology consulting, database administration, and IT support. Explore our products: PermFlowAI and LawOnSight.",
  openGraph: {
    title: "EightArc | Build what’s next. Make it intelligent.",
    description:
      "Software engineering, AI solutions, and data platforms built around your business.",
    url: "https://eightarc.com",
    siteName: "EightArc",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-page text-ink">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
