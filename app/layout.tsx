import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/nav/nav";



export const metadata: Metadata = {
  title: "bar chovy",
  description: "a monthly supper club",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>)
}
