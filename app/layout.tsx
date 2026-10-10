import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { AudioProvider } from "@/context/AudioContext";
import { CustomCursor } from "@/components/Common/CustomCursor";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deepu Paswan — Full-Stack Developer (.NET Core & MERN Stack)",
  description:
    "Full-Stack Developer with 2+ years of experience in MERN stack and 1+ year in .NET Core. Building scalable enterprise web applications, responsive UIs, and RESTful APIs.",
  keywords: [
    "Deepu Paswan",
    "Full-Stack Developer",
    ".NET Core",
    "MERN Stack",
    "React.js",
    "Angular",
    "Node.js",
    "C#",
    "MongoDB",
    "SQL Server",
    "RESTful API",
    "OpenAI API",
  ],
  authors: [{ name: "Deepu Paswan" }],
  openGraph: {
    title: "Deepu Paswan — Full-Stack Developer Portfolio",
    description:
      "Full-Stack Developer with 2+ years in MERN and 1+ year in .NET Core. Explore enterprise projects, AI systems, and technical capabilities.",
    url: "https://dpportfolio87.netlify.app/",
    siteName: "Deepu Paswan Portfolio",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#00E5FF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="cyan"
      className={`${chakraPetch.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-bg text-hud-text selection:bg-primary selection:text-bg font-body">
        <ThemeProvider>
          <AudioProvider>
            <CustomCursor />
            {children}
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

