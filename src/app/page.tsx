import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8">
      <div className="bg-card border border-border shadow-lg rounded-2xl p-10 flex flex-col items-center gap-6 w-full max-w-xl">
        <h1 className="text-4xl font-bold tracking-tight">Pulgo</h1>
        <p className="text-lg text-muted-foreground text-center max-w-xl">
          수업별로 코딩 테스트를 보고, 자동 채점과 실시간 점수 확인이 가능한 플랫폼입니다.<br />
          수업에 참여하고, 다양한 문제를 풀어보세요!
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/login">로그인</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/signup">회원가입</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
