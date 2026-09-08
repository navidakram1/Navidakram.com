import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f1015",
};

export const metadata: Metadata = {
  title: "Sk Navid Akram - Web Developer & Software Engineer | navidakram.com",
  description: "Official portfolio of Sk Navid Akram. Full-stack developer specializing in Java, React, Python, mobile apps, and SaaS businesses. Based in Cork, Ireland.",
  keywords: [
    "Sk Navid Akram",
    "Navid Akram",
    "Web Developer",
    "Software Engineer",
    "React Developer",
    "Java Specialist",
    "Cork Ireland Developer",
    "Rabbitguy.com",
    "Freelancer"
  ],
  authors: [{ name: "Sk Navid Akram", url: "https://navidakram.com" }],
  creator: "Sk Navid Akram",
  openGraph: {
    title: "Sk Navid Akram - Web Developer & Software Engineer",
    description: "8+ years of experience in information technology, graphics and website design, and SaaS business.",
    url: "https://navidakram.com",
    siteName: "navidakram.com",
    images: [
      {
        url: "https://navidakram.com/wp-content/uploads/2025/02/434724407_2933443146798509_2389628769491449782_n.jpg",
        width: 1200,
        height: 630,
        alt: "Sk Navid Akram",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sk Navid Akram - Web Developer",
    description: "Full-Stack Engineer & SaaS Owner. Specializing in React, Java, and Mobile Apps.",
    images: ["https://navidakram.com/wp-content/uploads/2025/02/434724407_2933443146798509_2389628769491449782_n.jpg"],
  },
  icons: {
    icon: "https://navidakram.com/wp-content/uploads/2024/02/navidakram.com_-1200x1166.png",
    shortcut: "https://navidakram.com/wp-content/uploads/2024/02/navidakram.com_-1200x1166.png",
    apple: "https://navidakram.com/wp-content/uploads/2024/02/navidakram.com_-1200x1166.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
