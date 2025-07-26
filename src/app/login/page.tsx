"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/firebaseAuth';

export default function LoginPage() {
  const [tab, setTab] = useState<'student' | 'teacher'>('student');
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
      if (tab === 'teacher') {
        // 쌤 계정: 이메일이 teacher@ 또는 admin@로 시작해야만 관리자 페이지로 이동
        if (/^(teacher|admin)@/i.test(email)) {
          router.push('/admin');
        } else {
          setError('쌤 계정이 아닙니다.');
          setLoading(false);
          return;
        }
      } else {
        router.push('/dashboard');
      }
    } catch (err: any) {
      setError(err.message || '로그인 실패');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 transition-colors duration-500 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/90 border border-gray-200 shadow-2xl rounded-2xl p-10 flex flex-col gap-6 backdrop-blur">
        <div className="flex gap-2 mb-2">
          <button type="button" onClick={() => setTab('student')} className={`flex-1 py-2 rounded-xl font-bold text-lg transition ${tab === 'student' ? 'bg-indigo-600 text-white shadow' : 'bg-gray-200 text-gray-600'}`}>일반 로그인</button>
          <button type="button" onClick={() => setTab('teacher')} className={`flex-1 py-2 rounded-xl font-bold text-lg transition ${tab === 'teacher' ? 'bg-green-600 text-white shadow' : 'bg-gray-200 text-gray-600'}`}>쌤 로그인</button>
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-2">{tab === 'student' ? '일반 로그인' : '쌤 로그인'}</h2>
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
        {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className={`w-full py-3 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 disabled:opacity-60 ${tab === 'teacher' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}
          disabled={loading}
        >
          {loading ? '로그인 중...' : (tab === 'teacher' ? '쌤 로그인' : '로그인')}
        </button>
        {tab === 'student' && (
          <button
            type="button"
            className="w-full mt-2 py-2 rounded text-xs bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
            onClick={() => router.push('/dashboard')}
          >
            게스트로 둘러보기
          </button>
        )}
        {tab === 'teacher' && (
          <>
            <button
              type="button"
              className="w-full mt-2 py-2 rounded text-xs bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
              onClick={() => router.push('/admin')}
            >
              쌤용 게스트로 둘러보기
            </button>
            <button
              type="button"
              className="w-full mt-2 py-2 rounded text-xs bg-green-100 text-green-700 hover:bg-green-200 transition border border-green-300 font-medium"
              onClick={() => router.push('/signup?role=teacher')}
            >
              쌤 회원가입
            </button>
          </>
        )}
        <p className="text-sm text-center text-gray-500 mt-2">
          {tab === 'student' ? (
            <>
              아직 계정이 없으신가요?{' '}
              <Link href="/signup" className="underline font-medium text-indigo-600">회원가입</Link>
            </>
          ) : (
            <>쌤 계정이 없으신가요? 관리자에게 문의하세요.</>
          )}
        </p>
      </form>
    </div>
  );
} 