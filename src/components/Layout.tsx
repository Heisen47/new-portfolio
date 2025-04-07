"use client";

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import StarsCanvas from './layout/Stars';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <StarsCanvas />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}