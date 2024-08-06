import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Nav } from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-12">
          <Nav />
          <br />
          {children}

          <footer className="mt-24">
            <Link
              href='/impressum'
              className="underline text-blue-800"
            >Impressum</Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
