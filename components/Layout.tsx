import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#0052B4" />
      </Head>
      <div className="min-h-screen flex flex-col bg-background text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
