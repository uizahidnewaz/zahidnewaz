import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// ✅ Only this export — do NOT use "export const metadata" if using logic
export async function generateMetadata() {
  const brand = "Zahid Newaz";
  const mainurl = "https://zahidnewaz.vercel.app";
  const keywords = ["zahidnewaz", "zahid newaz"];
  const description = `
I'm Shah Md. Zahid Newaz. I studied at Rajuk Uttara Model College, then went on to complete my BSc in Computer Science and Engineering from North South University...

(My full story and experience...)
`;

  return {
    title: brand,
    description,
    keywords,
    openGraph: {
      type: "website",
      url: mainurl,
      title: brand,
      description,
      site_name: "zahidnewaz",
      locale: "en_US",
    },
  };
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
