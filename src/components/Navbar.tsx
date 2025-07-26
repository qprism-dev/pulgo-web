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
    <nav className="container flex items-center justify-between py-4 px-2 bg-card/80 backdrop-blur border-b border-border shadow-sm rounded-b-xl">
      <Link href="/" className="font-bold text-xl tracking-tight">Pulgo</Link>
      <div className="flex gap-2 items-center">
        <Button variant="ghost" size="icon" aria-label="다크모드 토글" onClick={toggleDark}>
          {dark ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="currentColor"/></svg>
          ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" stroke="currentColor" strokeWidth="2"/></svg>
          )}
        </Button>
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
    </nav>
  );
} 