import { Inter, Playfair_Display, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

// Add this section for metadata, including icons
export const metadata = {
  title: "Bell Book and Comic - Your Neighborhood Bookstore in Dayton, OH",
  description:
    "Discover books, comics, and literary adventures at Bell Book and Comic in Dayton, Ohio. Your community destination for reading.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${merriweather.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}