import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";
import connectDB from "@/lib/mongodb";
import Settings from "@/models/Settings";
import Category from "@/models/Category";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileNav from "@/components/MobileNav";
import { Providers } from "@/components/Providers";
import { NavbarDataProvider } from "@/context/NavbarDataContext";
import { cn } from "@/lib/utils";
import { withCache, CACHE_KEYS } from "@/lib/cache";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const getCachedSeoSettings = withCache(CACHE_KEYS.SEO, 60_000, async () => {
  await connectDB();
  const settings = await Settings.findOne()
    .select("seo favicon shopName")
    .lean();
  return settings ? JSON.parse(JSON.stringify(settings)) : null;
});

export async function generateMetadata(): Promise<Metadata> {
  const defaultMeta = {
    title: "Miraly Foods | Quality Food Products",
    description:
      "Discover premium quality food products from Miraly Foods. Fresh, pure, and crafted with care.",
    keywords:
      "food products, quality foods, miraly foods, fresh ingredients, premium food",
  };

  try {
    const settings = await getCachedSeoSettings();

    if (settings) {
      const siteName = settings.shopName || "Miraly Foods";
      return {
        title: settings.seo?.metaTitle || siteName,
        description: settings.seo?.metaDescription || defaultMeta.description,
        keywords: settings.seo?.keywords
          ? settings.seo.keywords.split(",").map((k: string) => k.trim())
          : defaultMeta.keywords.split(","),
        openGraph: {
          title: settings.seo?.metaTitle || siteName,
          description: settings.seo?.metaDescription || defaultMeta.description,
          images: settings.seo?.ogImage ? [settings.seo.ogImage] : [],
          siteName: siteName,
        },
        icons: settings.favicon ? { icon: settings.favicon } : undefined,
      };
    }
  } catch (e) {
    console.error("SEO Fetch Error:", e);
  }

  return defaultMeta;
}

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const getNavbarData = withCache(CACHE_KEYS.NAVBAR, 60_000, async () => {
  try {
    await connectDB();
    const [settings, categories] = await Promise.all([
      Settings.findOne()
        .select("logo shopName contactPhone contactEmail socialMedia address")
        .lean(),
      Category.find({ isActive: { $ne: false } })
        .select("_id name slug")
        .sort({ order: 1 })
        .lean(),
    ]);
    return {
      settings: settings ? JSON.parse(JSON.stringify(settings)) : null,
      categories: JSON.parse(JSON.stringify(categories || [])),
    };
  } catch (e) {
    console.error("Navbar data fetch error:", e);
    return { settings: null, categories: [] };
  }
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbarPromise = getNavbarData();

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased text-text-body bg-white pb-16 lg:pb-0`}
      >
        <Providers>
          <Suspense>
            <NavbarDataProvider dataPromise={navbarPromise}>
              {children}
              <WhatsAppButton />
              <MobileNav />
            </NavbarDataProvider>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
