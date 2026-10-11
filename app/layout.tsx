import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Developer Groups | RBU",
  description: "Learn, build, and connect with the GDG RBU community.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
