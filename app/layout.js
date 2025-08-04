import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Zahid Newaz",
  description: "UI/UX Designer",
};

export async function generateMetadata() {
  let brand = "Zahid Newaz";
  let mainurl = "https://zahidnewaz.vercel.app";
  let keywords = ["zahidnewaz", "zahid newaz"];
  let description = `
  I'm Shah Md. Zahid Newaz. I studied at Rajuk Uttara Model College, then went on to complete my BSc in Computer Science and Engineering from North South University. For a long time, I thought my path was already set, lines of code, system design, maybe software development.

My journey into design began at the end of 2023, when I discovered a deep interest in creating user-friendly and visually engaging digital experiences. Since then, I’ve been learning and growing every day, exploring UI/UX principles, studying real-world products, and building designs that solve real problems. I believe in continuous learning, and thoughtful design.
My mission is to make people’s lives easier through thoughtful design and to create experiences that users genuinely enjoy
  As a CSE student, I loved solving logical problems and writing code. But deep down, I felt something was missing. I wanted to create things people could see, feel, and connect with.

Then one day, a friend introduced me to Figma. At first, it seemed like just another tool. But once I started experimenting, moving shapes, playing with colors, aligning elements, something clicked. I didn’t realize how much time had passed. Designing felt natural, exciting, even therapeutic. I could sit for hours without noticing the clock, fully lost in the process.

That small spark of curiosity turned into something much bigger. I began learning everything I could about UI/UX. No formal classes. Just pure drive. I read articles, watched tutorials, downloaded design eBooks, followed designers I admired, and practiced almost daily. What started as an interest quickly grew into a passion, and that passion became my path. I’m still learning, still exploring, and still just as excited as I was that very first day I opened Figma.

“Design is not just what it looks like and feels like. Design is how it works."
Blinto llc | March 2025 - July 2025
UI/UX Designer
I worked closely with developers and directly communicated with clients to design both websites and software. Beyond UI/UX, I also contributed by creating blog graphics that aligned with the company’s content strategy
b-trac solutions ltd | November 2024 - January 2025
Graphic & UI/UX Designer Intern
I collaborated with the Business Development team to support product promotion through graphic design for social media and marketing materials. I also contributed to the UI/UX team, where I worked on improving digital interfaces
  `;
  return {
    title: brand,
    description: description,
    keywords: keywords,
    openGraph: {
      type: "website",
      url: mainurl,
      title: brand,
      description: description,
      // images: newdata.images,
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
