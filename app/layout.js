// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Url-Shortener",
  description: "Your trusted url shortner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image"
        href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOgxWobnXQaCjmhA9iBQqNKODo2vuKnprDQ&s"
      />
      <body
        className="antialiased">  
        <Navbar />
        {children}
      </body>
    </html>
  );
}
