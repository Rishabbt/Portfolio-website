import type { Metadata } from "next";
import { Inter  } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import ScrollToTop from "./components/Helper/ScrollToTop";
import Script from "next/script";


const font = Inter ({
  weight:[ '100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
})
const GA_MEASUREMENT_ID = "G-8NX2CV8WHQ";
export const metadata: Metadata = {
  title: "Porfolio",
  description: "Showcasing my work to the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      <body
        className={`${font.className}  antialiased bg-[#0d0d1f]`}
      > < ResponsiveNav />
        {children}
        < ScrollToTop />
      </body>
    </html>
  );
}
