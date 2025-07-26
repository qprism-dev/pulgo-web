"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signup } from '@/lib/firebaseAuth';

export default function SignupPage() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('role') === 'teacher' ? 'teacher' : 'student';
  const [tab, setTab] = useState<'student' | 'teacher'>(initialTab);
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
      if (tab === 'teacher') {
        if (!/^(teacher|admin)@/i.test(email)) {
          setError('쌤 계정은 teacher@ 또는 admin@로 시작해야 합니다.');
          setLoading(false);
          return;
        }
      }
      await signup(email, password);
      router.push(tab === 'teacher' ? '/admin' : '/dashboard');
    } catch (err: any) {
      setError(err.message || '회원가입 실패');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 transition-colors duration-500 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/90 border border-gray-200 shadow-2xl rounded-2xl p-10 flex flex-col gap-6 backdrop-blur">
        <div className="flex gap-2 mb-2">
          <button type="button" onClick={() => setTab('student')} className={`flex-1 py-2 rounded-xl font-bold text-lg transition ${tab === 'student' ? 'bg-indigo-600 text-white shadow' : 'bg-gray-200 text-gray-600'}`}>일반 회원가입</button>
          <button type="button" onClick={() => setTab('teacher')} className={`flex-1 py-2 rounded-xl font-bold text-lg transition ${tab === 'teacher' ? 'bg-green-600 text-white shadow' : 'bg-gray-200 text-gray-600'}`}>쌤 회원가입</button>
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">{tab === 'student' ? '일반 회원가입' : '쌤 회원가입'}</h2>
        <input
          type="email"
          name="email"
          placeholder="이메일"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
        <input
          type="password"
          name="confirm"
          placeholder="비밀번호 확인"
          required
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-transparent text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className={`w-full py-3 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 disabled:opacity-60 ${tab === 'teacher' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
          disabled={loading}
        >
          {loading ? '가입 중...' : (tab === 'teacher' ? '쌤 회원가입' : '회원가입')}
        </button>
        <p className="text-sm text-center text-gray-500 mt-2">
          {tab === 'student' ? (
            <>
              이미 계정이 있으신가요?{' '}
              <Link href="/login" className="underline font-medium text-indigo-600">로그인</Link>
            </>
          ) : (
            <>쌤 계정이 있으신가요? <Link href="/login" className="underline font-medium text-green-700">쌤 로그인</Link></>
          )}
        </p>
      </form>
    </div>
  );
} 