"use client";

export default function AdminPage() {
  return (
    <section className="py-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">관리자 페이지</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">수업 관리</h3>
        <div className="border p-4 rounded bg-white/80 shadow flex flex-col gap-2">
          <input className="border rounded px-3 py-2" placeholder="새 수업명 입력" />
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-green-500 text-white font-semibold">추가</button>
            <button className="px-3 py-1 rounded bg-yellow-500 text-white font-semibold">수정</button>
            <button className="px-3 py-1 rounded bg-red-500 text-white font-semibold">삭제</button>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">테스트 관리</h3>
        <div className="border p-4 rounded bg-white/80 shadow flex flex-col gap-2">
          <input className="border rounded px-3 py-2" placeholder="새 테스트명 입력" />
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-green-500 text-white font-semibold">추가</button>
            <button className="px-3 py-1 rounded bg-yellow-500 text-white font-semibold">수정</button>
            <button className="px-3 py-1 rounded bg-red-500 text-white font-semibold">삭제</button>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">체점 코드 관리</h3>
        <div className="border p-4 rounded bg-white/80 shadow flex flex-col gap-2">
          <textarea className="border rounded px-3 py-2" placeholder="체점 코드 입력" rows={3} />
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-green-500 text-white font-semibold">등록</button>
            <button className="px-3 py-1 rounded bg-yellow-500 text-white font-semibold">수정</button>
            <button className="px-3 py-1 rounded bg-red-500 text-white font-semibold">삭제</button>
          </div>
        </div>
      </div>
    </section>
  );
} 