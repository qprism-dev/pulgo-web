"use client";
import { useAuth } from '@/contexts/AuthContext';

export default function ClassesPage() {
  const { user } = useAuth();
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-gradient-to-br from-slate-100 to-slate-300 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500 pt-24 px-4">
      <section className="w-full max-w-3xl mx-auto py-12">
        <h1 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-white">수업 목록</h1>
        <div className="grid gap-6">
          {[1,2,3].map(n => (
            <div key={n} className="border p-6 rounded-2xl bg-white/90 dark:bg-gray-900/90 shadow flex flex-col md:flex-row items-center justify-between">
              <div>
                <div className="text-xl font-bold mb-1">수업 {n} (더미)</div>
                <div className="text-gray-500 dark:text-gray-300 text-sm mb-2">수업 설명 {n} (더미)</div>
              </div>
              <button className={`mt-4 md:mt-0 px-5 py-2 rounded-xl font-semibold shadow ${user ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} disabled={!user}>{user ? '수강 신청' : '로그인 필요'}</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 