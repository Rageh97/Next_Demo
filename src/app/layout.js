import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav
          style={{
            backgroundColor: "white",
            fontSize: "20px",
            color: "black",
            padding: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/Posts"}>Posts</Link>
          <Link href={"/Articles"}>Articles</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
