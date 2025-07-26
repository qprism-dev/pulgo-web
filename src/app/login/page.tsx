"use client";
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { login } from '@/lib/firebaseAuth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || '로그인 실패');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-sm mx-auto mt-20 p-8 border rounded-lg shadow flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-center">로그인</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="이메일" required value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" name="password" placeholder="비밀번호" required value={password} onChange={e => setPassword(e.target.value)} />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" className="w-full" disabled={loading}>{loading ? '로그인 중...' : '로그인'}</Button>
      </form>
      <p className="text-sm text-center text-muted-foreground">
        아직 계정이 없으신가요?{' '}
        <Link href="/signup" className="underline">회원가입</Link>
      </p>
    </section>
  );
} 