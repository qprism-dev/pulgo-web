"use client";
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div className="py-16 text-center">로딩 중...</div>;
  }

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">내 수업</h2>
      <div className="grid gap-4 mb-8">
        {/* TODO: 수업 카드 리스트 */}
        <div className="border p-4 rounded">수업1 (더미)</div>
        <div className="border p-4 rounded">수업2 (더미)</div>
        <button className="mt-2 px-4 py-2 bg-primary text-primary-foreground rounded">수강 신청</button>
      </div>
      <h3 className="text-xl font-semibold mb-2">내 제출/점수</h3>
      <ul className="list-disc pl-6">
        <li>문제1 - 80점</li>
        <li>문제2 - 100점</li>
      </ul>
    </section>
  );
} 