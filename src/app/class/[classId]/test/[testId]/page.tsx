export default function TestDetailPage() {
  return (
    <section className="py-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">문제 제목 (더미)</h2>
      <p className="mb-6">문제 설명 (더미)</p>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">코드 에디터 (더미)</label>
        <textarea className="w-full h-40 border rounded p-2 font-mono" placeholder="여기에 코드를 작성하세요"></textarea>
      </div>
      <button className="px-6 py-2 bg-primary text-primary-foreground rounded">제출</button>
      <div className="mt-6 p-4 border rounded bg-muted">
        <strong>채점 결과:</strong> (더미)
      </div>
    </section>
  );
} 