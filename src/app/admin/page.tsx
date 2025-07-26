export default function AdminPage() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">관리자 페이지</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">수업 관리</h3>
        <div className="border p-4 rounded">수업 추가/수정/삭제 (더미)</div>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">테스트 관리</h3>
        <div className="border p-4 rounded">테스트 추가/수정/삭제 (더미)</div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">체점 코드 관리</h3>
        <div className="border p-4 rounded">체점 코드 등록/수정 (더미)</div>
      </div>
    </section>
  );
} 