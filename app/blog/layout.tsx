import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Witespace Studios — Blog`,
  description: `A curated list of articles about everything web dev, design and tech. Web design in Dublin.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mt-32 xl:mx-60 lg:mx-48 md:mx-28 sm:mx-16 mx-5 transition-all duration-200">
        {children}
      </div>
      <Footer />
    </>
  );
}
