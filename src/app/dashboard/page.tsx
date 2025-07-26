"use client";
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <section className="py-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">수업 목록</h2>
      <div className="grid gap-4 mb-8">
        <div className="border p-4 rounded bg-white/80 shadow flex flex-col md:flex-row items-center justify-between">
          <span>수업1 (맛보기)</span>
          <Link href="/class/1" className="mt-2 md:mt-0 px-4 py-2 rounded bg-green-500 hover:bg-green-600 text-white font-semibold transition">바로 들어가기</Link>
        </div>
        <div className="border p-4 rounded bg-white/80 shadow flex flex-col md:flex-row items-center justify-between">
          <span>수업2 (더미)</span>
          <button className="mt-2 md:mt-0 px-4 py-2 rounded bg-indigo-500 text-white font-semibold">수강 신청</button>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">제출/점수 예시</h3>
      <ul className="list-disc pl-6">
        <li>문제1 - 80점</li>
        <li>문제2 - 100점</li>
      </ul>
    </section>
  );
} 