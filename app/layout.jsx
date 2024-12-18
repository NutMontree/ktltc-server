import Nav from "./(components)/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KTLTC SERVER",
  description: "Creating a functional ktltc-server system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
