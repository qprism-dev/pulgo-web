"use client";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function useDarkMode() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDark(document.documentElement.classList.contains("dark"));
    }
  }, []);
  const toggle = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
      setDark(document.documentElement.classList.contains("dark"));
    }
  };
  return [dark, toggle] as const;
}

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [dark, toggleDark] = useDarkMode();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-card/80 backdrop-blur border-b border-border shadow-sm">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl flex items-center justify-between py-4 px-6 md:px-12">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer select-none">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white shadow-md group-hover:scale-105 transition-transform">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="currentColor"/><path d="M7.5 13l-2-3 2-3M12.5 7l2 3-2 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 8.5l2 3-2 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="font-bold text-xl tracking-tight">풀고</span>
            <span className="ml-2 text-xs text-muted-foreground font-medium">by QPrism</span>
          </Link>
          <Link href="/classes" className="font-medium hover:underline ml-6 mr-auto">수업 목록</Link>
          <div className="flex gap-2 items-center">
            {loading ? null : user ? (
              <>
                <span className="text-sm text-muted-foreground">{user.email}</span>
                <Link href="/dashboard" className="font-medium hover:underline">대시보드</Link>
                <Button variant="outline" size="sm" onClick={handleLogout}>로그아웃</Button>
              </>
            ) : (
              <>
                <Link href="/login" className="font-medium hover:underline">로그인</Link>
                <Link href="/signup" className="font-medium hover:underline">회원가입</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 