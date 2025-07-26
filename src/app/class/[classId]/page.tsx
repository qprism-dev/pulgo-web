"use client";

export default function ClassDetailPage() {
  return (
    <section className="py-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">수업명 (더미)</h2>
      <p className="mb-6">수업 설명 (더미)</p>
      <h3 className="text-xl font-semibold mb-2">테스트 목록</h3>
      <div className="grid gap-4">
        <div className="border p-4 rounded flex justify-between items-center bg-white/80 shadow">
          <span>문제1 (더미)</span>
          <a href="/class/1/test/1" className="px-4 py-2 rounded bg-indigo-500 text-white font-semibold">응시</a>
        </div>
        <div className="border p-4 rounded flex justify-between items-center bg-white/80 shadow">
          <span>문제2 (더미)</span>
          <a href="/class/1/test/2" className="px-4 py-2 rounded bg-indigo-500 text-white font-semibold">응시</a>
        </div>
      </div>
    </section>
  );
} 