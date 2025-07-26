import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import { AuthProvider } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Pulgo - 코딩 테스트 플랫폼',
  description: '수업별 코딩 테스트, 자동 채점, 실시간 점수 확인',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-background text-foreground">
        <AuthProvider>
          <header className="w-full border-b mb-8">
            <Navbar />
          </header>
          <main className="container mx-auto px-4">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
