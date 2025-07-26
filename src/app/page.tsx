"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-slate-100 to-slate-300 transition-colors duration-500">
      <main className="w-full flex justify-center">
        <section className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 py-20 md:py-32 pt-24">
          {/* Left: Hero Text */}
          <div className="flex-1 flex flex-col items-start gap-8 z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 drop-shadow-xl leading-tight">
              풀고
              <span className="block text-indigo-500 font-black mt-2">코딩 테스트 플랫폼</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl font-medium leading-relaxed">
              수업별로 코딩 테스트를 보고, 자동 채점과 실시간 점수 확인이 가능한 플랫폼입니다.<br />
              수업에 참여하고, 다양한 문제를 풀어보세요!
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="/login" className="px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">로그인</Link>
              <Link href="/signup" className="px-8 py-3 rounded-2xl bg-white/90 border border-indigo-400 text-indigo-700 font-bold text-lg shadow-xl hover:bg-indigo-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">회원가입</Link>
            </div>
          </div>
          {/* Right: 3D Sphere */}
          <div className="flex-1 flex items-center justify-center w-full h-[320px] md:h-[420px] lg:h-[500px] relative z-0">
            <div className="w-full h-full max-w-[420px] max-h-[420px]">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[2, 2, 2]} intensity={1.3} />
                <Sphere args={[1.2, 64, 64]} scale={1.15}>
                  <MeshDistortMaterial
                    color="#6366f1"
                    attach="material"
                    distort={0.45}
                    speed={2.2}
                    roughness={0.18}
                    metalness={0.85}
                    emissive="#a5b4fc"
                    emissiveIntensity={0.25}
                  />
                </Sphere>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2.2} />
              </Canvas>
              {/* Glow 효과 */}
              <div className="absolute inset-0 pointer-events-none select-none rounded-full blur-3xl opacity-40 bg-indigo-400" style={{ filter: 'blur(80px)' }} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
