"use client";
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { signup } from '@/lib/firebaseAuth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirm) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    setLoading(true);
    try {
      await signup(email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || '회원가입 실패');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-sm mx-auto mt-20 p-8 border rounded-lg shadow flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-center">회원가입</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="이메일" required value={email} onChange={e => setEmail(e.target.value)} />
        <Input type="password" name="password" placeholder="비밀번호" required value={password} onChange={e => setPassword(e.target.value)} />
        <Input type="password" name="confirm" placeholder="비밀번호 확인" required value={confirm} onChange={e => setConfirm(e.target.value)} />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" className="w-full" disabled={loading}>{loading ? '가입 중...' : '회원가입'}</Button>
      </form>
      <p className="text-sm text-center text-muted-foreground">
        이미 계정이 있으신가요?{' '}
        <Link href="/login" className="underline">로그인</Link>
      </p>
    </section>
  );
} 