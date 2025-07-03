import Script from "next/script";
import "./globals.css";
import { Montserrat, Libre_Franklin } from "next/font/google";

const montserrat = Montserrat({
   variable: "--font-montserrat",
   subsets: ["latin"],
});


const main_font = Libre_Franklin({
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
   variable: "--font-main-font",
   display: "swap",
});

export const metadata = {
   title: "Zyrixo",
   description: "Zyrixo is a one-stop solution for Web Development, App Development, Cybersecurity, Digital Marketing, and innovative tech solutions.",
};


export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head>
            <meta
               name="keywords"
               content="web development, app development, cybersecurity, digital marketing, innovative tech, zyrixo, zyrixo web development, zyrixo app development, zyrixo cybersecurity, zyrixo digital marketing, zyrixo innovative tech, zyrixo technology, zyrixo web design, zyrixo app design"
            />
         </head>
         <body
            className={`${montserrat.variable} ${main_font.variable} antialiased`}
         >
            <Script
               src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
               strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
               {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
    `}
            </Script>
            {children}
         </body>

      </html>
   );
}
