import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webryxon | Digital Agency",
  description:
    "We craft digital experiences that elevate brands and drive growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* General Metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Webryxon — A modern digital agency delivering web design, development, and marketing solutions."
        />
        <meta
          name="keywords"
          content="Webryxon, digital agency, web development, branding, marketing, software"
        />
        <meta name="author" content="Webryxon Agency" />

        {/* Favicon & PWA Assets */}
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link rel="icon" href="c/favicon.ico" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="Webryxon — Modern Digital Agency" />
        <meta
          property="og:description"
          content="Creative and professional web development and design services by Webryxon."
        />
        <meta property="og:image" content="og-image.jpg" />
        <meta property="og:url" content="https://webryxon.live" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Webryxon — Modern Digital Agency" />
        <meta
          name="twitter:description"
          content="Creative and professional web development and design services by Webryxon."
        />
        <meta name="twitter:image" content="/og-image.jpg" />

        <title>Webryxon — Modern Digital Agency</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
