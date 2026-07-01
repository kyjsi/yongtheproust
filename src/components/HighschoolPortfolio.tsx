import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { 
  ArrowLeft, 
  Award, 
  BookOpen, 
  ChevronRight, 
  TrendingUp, 
  Compass, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Globe,
  ExternalLink,
  Target
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';

// --- Recharts Data ---
const chartData = [
  { name: '1-1 수학', grade: 6, convergence: 1.0, 과목: '수학' },
  { name: '1-2 수학Ⅰ', grade: 5, convergence: 2.0, 과목: '수학Ⅰ' },
  { name: '2-1 수학Ⅱ', grade: 2, convergence: 4.0, 과목: '수학Ⅱ' },
  { name: '2-2 확통', grade: 4, convergence: 4.5, 과목: '확률과통계' },
  { name: '3-1 미적분', grade: 3, convergence: 5.0, 과목: '미적분' }
];

export default function HighschoolPortfolio() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState('positioning');

  // Simple scroll spy to update active section in the sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['positioning', 'achievements', 'narrative', 'capabilities', 'experience', 'philosophy'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  const navItems = [
    { id: 'positioning', label: '포지셔닝' },
    { id: 'achievements', label: '핵심 성과' },
    { id: 'narrative', label: '생기부 서사' },
    { id: 'capabilities', label: '전과 & 대학 역량' },
    { id: 'experience', label: '업무 경험' },
    { id: 'philosophy', label: '지도 철학' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      {/* Editorial Breadcrumbs & Header */}
      <div className="border-b border-black pb-4 mb-8">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider mb-2 text-black/60">
          <Link to="/" className="hover:text-black hover:underline">HOME</Link>
          <ChevronRight size={12} />
          <Link to="/projects" className="hover:text-black hover:underline">PORTFOLIO</Link>
          <ChevronRight size={12} />
          <span className="text-black font-bold">HIGHSCHOOL</span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none text-black">
          University Admission
        </h1>
        <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-red-800 font-bold mt-2">
          이과 학생 대상 "주제탐구보고서 지도 조교" 지원용 포트폴리오
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sticky Table of Contents Navigation */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            <div className="newspaper-border p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-serif font-bold uppercase border-b border-black pb-2 mb-4 text-sm tracking-wide">
                INDEX
              </h3>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left font-sans text-sm py-2 px-3 transition-colors flex items-center justify-between border ${
                      activeSection === item.id
                        ? 'bg-black text-white border-black font-semibold'
                        : 'bg-transparent text-black border-transparent hover:bg-neutral-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={14} className={activeSection === item.id ? 'opacity-100' : 'opacity-30'} />
                  </button>
                ))}
              </nav>
            </div>

            <div className="hidden lg:block text-center font-mono text-[10px] text-black/50 border-t border-black/10 pt-4">
              <span>DESIGNED BY YONGTHEPROUST • VOL. 2026</span>
            </div>
          </div>
        </div>

        {/* Portfolio Content */}
        <div className="lg:col-span-3 space-y-16">
          
          {/* Section 1: Positioning */}
          <section id="positioning" className="scroll-mt-24 space-y-6">
            <div className="border-b-2 border-black pb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-red-800 font-bold">01. POSITIONING</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase text-black">
                스펙이 아니라, 설계로 합격했습니다
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4 bg-neutral-50 border border-black p-4 text-center">
                <span className="font-mono text-xs text-black/60 block uppercase">ADMITTED UNIVERSITIES</span>
                <span className="font-serif text-5xl font-bold text-red-800 block my-2">7</span>
                <span className="font-sans text-xs text-black/80 font-medium block">학생부종합전형 합격 (이공계·수시)</span>
                
                <div className="border-t border-black/20 pt-3 mt-3 text-left space-y-1.5">
                  {[
                    "서강대학교 전자공학과",
                    "성균관대학교 건설환경공학부",
                    "한양대학교 도시공학과",
                    "중앙대학교 전기전자공학과",
                    "건국대학교 전기전자공학과",
                    "UNIST (울산과학기술원)",
                    "DGIST (대구경북과학기술원)"
                  ].map((univ, idx) => (
                    <div key={idx} className="text-[10.5px] text-neutral-800 font-medium leading-tight flex items-start gap-1">
                      <span className="text-red-800">•</span>
                      <span>{univ}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-8 space-y-4">
                <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-neutral-800 font-medium">
                  "숫자가 아니라 서사를 설계해, 학생부종합전형만으로 이공계 7개교에 합격했습니다."
                </p>
                <p className="text-neutral-700 leading-relaxed text-base">
                  저는 화려한 성적으로 대학에 합격한 학생이 아닙니다. 저의 <strong>약점을 정확히 진단</strong>하고, 이를 보완할 수 있는 비교과 활동과 전략을 <strong>스스로 설계</strong>해 학종으로 이공계 7개교에 합격했습니다. 이 '설계' 경험을 바탕으로, 학생마다 다른 조건에 맞춘 생기부 설계와 방향 지도가 가능합니다.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Core Achievements */}
          <section id="achievements" className="scroll-mt-24 space-y-6">
            <div className="border-b-2 border-black pb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-red-800 font-bold">02. ACHIEVEMENTS</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase text-black">
                학업 이력과 주요 성취
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1: Academics */}
              <div className="newspaper-border p-5 bg-white space-y-4">
                <div className="flex items-center gap-2 border-b border-black pb-2">
                  <GraduationCap size={20} />
                  <h3 className="font-serif font-bold uppercase text-lg">고등학교 학력 및 내신</h3>
                </div>
                <ul className="space-y-3 text-sm text-neutral-700">
                  <li>
                    <strong className="text-black">출신 고교:</strong> 북일고등학교 (전국단위 자율형사립고)
                  </li>
                  <li>
                    <strong className="text-black">졸업 석차:</strong> 67등
                  </li>
                  <li>
                    <strong className="text-black">내신 평균:</strong> 3.6등급
                  </li>
                  <li>
                    <strong className="text-black">수학 등급 추이:</strong> 6등급 → 5등급 → 2등급 → 4등급 → 3등급 (평균 4.25등급)
                  </li>
                </ul>
              </div>

              {/* Box 2: College Achievements */}
              <div className="newspaper-border p-5 bg-white space-y-4">
                <div className="flex items-center gap-2 border-b border-black pb-2">
                  <Award size={20} />
                  <h3 className="font-serif font-bold uppercase text-lg">대학 재학 및 성취</h3>
                </div>
                <ul className="space-y-3 text-sm text-neutral-700">
                  <li>
                    <strong className="text-black">재학:</strong> 한양대학교 전기공학전공 (4학년)
                  </li>
                  <li>
                    <strong className="text-black">석차:</strong> 14 / 88등
                  </li>
                  <li>
                    <strong className="text-black">학점:</strong> 4.08
                  </li>
                  <li>
                    <strong className="text-black block mb-1">주요 활동:</strong>
                    <ul className="space-y-1 pl-4 list-disc text-xs text-neutral-600">
                      <li>대한전기학회 스마트에너지챌린지 동상</li>
                      <li>글로벌 프론티어 최우수상</li>
                      <li>April 랩실 인턴</li>
                      <li>블록체인 학회 HiBlock 4기 임원</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-black bg-black text-white p-5 text-center shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]">
              <p className="font-serif text-lg italic md:text-xl">
                "3.6이라는 평범한 내신과 4.25라는 불리한 수학 성적에도 합격할 수 있던 비결"
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-red-400 mt-2 font-bold">
                그 격차를 메운 '비교과 설계 전략'이 다음 섹션의 핵심입니다.
              </p>
            </div>
          </section>

          {/* Section 3: Highschool Narrative */}
          <section id="narrative" className="scroll-mt-24 space-y-10">
            <div className="border-b-2 border-black pb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-red-800 font-bold">03. NARRATIVE</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase text-black">
                고등학교 생기부 분석
              </h2>
            </div>

            {/* 3-1: Core Theme */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl md:text-2xl font-bold uppercase border-b border-black/20 pb-1 flex items-center gap-2">
                <Compass size={18} /> 3-1. 진로
              </h3>
              
              {/* 1) Large Emphasized Headline */}
              <div className="border-l-4 border-red-800 pl-4 py-1.5 my-4 bg-neutral-50/50">
                <p className="font-serif text-xl md:text-2xl font-bold text-neutral-900 leading-tight">
                  "제 진로는, 하나의 학과를 향해 곧게 뻗은 직선이 아니었습니다."
                </p>
              </div>

              {/* 2) 3 Chronological Boxes */}
              <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-4 my-6">
                {/* Box 1 */}
                <div className="flex-1 w-full border border-black p-4 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-1">1학년</span>
                    <h4 className="font-serif font-bold text-sm md:text-base text-neutral-900 mb-2 leading-tight">
                      막연한 '에너지' 관심, 마구잡이 탐색
                    </h4>
                  </div>
                  <div className="border-t border-dashed border-black/20 pt-2 mt-2">
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed space-y-1">
                      <span className="block">• 무선전력</span>
                      <span className="block">• 오염물질 화학처리</span>
                      <span className="block">• 법·정책 동아리</span>
                    </p>
                  </div>
                </div>

                {/* Arrow 1 */}
                <div className="flex items-center justify-center text-neutral-400 font-serif text-xl font-bold py-1 md:py-0">
                  <span className="hidden md:inline">→</span>
                  <span className="inline md:hidden">↓</span>
                </div>

                {/* Box 2 */}
                <div className="flex-1 w-full border border-black p-4 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block mb-1">2학년</span>
                    <h4 className="font-serif font-bold text-sm md:text-base text-neutral-900 mb-2 leading-tight">
                      '전기·전자'로 진로 확정
                    </h4>
                  </div>
                  <div className="border-t border-dashed border-black/20 pt-2 mt-2">
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed space-y-1">
                      <span className="block">• AI 가상발전소</span>
                      <span className="block">• 이동통신 전력제어</span>
                    </p>
                  </div>
                </div>

                {/* Arrow 2 */}
                <div className="flex items-center justify-center text-neutral-400 font-serif text-xl font-bold py-1 md:py-0">
                  <span className="hidden md:inline">→</span>
                  <span className="inline md:hidden">↓</span>
                </div>

                {/* Box 3 - Emphasized */}
                <div className="flex-1 w-full border-2 border-red-800 p-4 bg-red-50/10 shadow-[3px_3px_0px_0px_rgba(153,27,27,1)] flex flex-col justify-between ring-1 ring-red-800/10">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-mono text-xs font-bold text-red-800 uppercase tracking-wider">3학년</span>
                      <span className="font-mono text-[9px] bg-red-800 text-white px-1.5 py-0.5 font-bold uppercase">전략적 심화</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm md:text-base text-neutral-950 mb-2 leading-tight">
                      전력·전자 탐구는 오히려 심화 + 건도토환 전략적 병행
                    </h4>
                  </div>
                  <div className="border-t border-dashed border-red-800/20 pt-2 mt-2 space-y-2">
                    <div>
                      <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block mb-0.5">전력·전자 심화 (핵심 축)</span>
                      <p className="text-xs text-neutral-900 font-bold leading-relaxed pl-1.5 border-l border-red-800">
                        • 할바흐 배열 · 코일 발전효율<br />
                        • EMI 차폐 · RLC 회로
                      </p>
                    </div>
                    <div className="pt-1.5 border-t border-dotted border-red-800/15">
                      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-0.5">건도토환 전략적 병행</span>
                      <p className="text-xs text-neutral-600 font-medium leading-relaxed pl-1.5 border-l border-neutral-300">
                        • 현수교 · QGIS 홍수지도
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3) Finishing Paragraph */}
              <p className="text-neutral-700 leading-relaxed text-sm my-4 break-keep">
                결과적으로 제 생기부는 전력·에너지를 굵은 축으로 하되 화학과 건축이 곁들여진, 이른바 '짬뽕'입니다. 축 자체는 3년 내내 오히려 깊어졌지만, 학과 선택(도시공학과·건설환경공학부)까지 더해지면 표면적으로는 진로 일관성이 흔들려 보일 수 있습니다. 저는 이러한 활동들을 에너지와 도시를 아우르는 '스마트시티'라는 더 넓은 하나의 축으로 다시 엮어, 일관된 서사로 재구성했습니다.
              </p>

              {/* Table and paragraph removed as requested */}
            </div>

            {/* 3-2: Math Graph and Evolution */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl md:text-2xl font-bold uppercase border-b border-black/20 pb-1 flex items-center gap-2">
                <TrendingUp size={18} /> 3-2. 수학의 위상 변화 — "호기심"에서 "진로 도구"로
              </h3>
              <p className="text-neutral-700 leading-relaxed text-sm">
                학년이 올라갈수록 수학을 사용하는 깊이가 단순 호기심에서 복잡한 공학적 실무를 해결하기 위한 '도구'로 극적으로 진화합니다.
              </p>

              {/* Recharts Chart C-1: Dual Axes */}
              <div className="border border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h4 className="font-serif font-bold text-center text-sm md:text-base uppercase tracking-wider mb-2">
                  수학 내신 등급 vs 탐구 융합도 추이 (정성·정량 비교)
                </h4>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={chartData}
                      margin={{ top: 15, right: 25, left: -10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="name" tick={{ fontSize: 11, fontFamily: 'monospace' }} />
                      
                      {/* Left Y-axis (Inverted Grades) */}
                      <YAxis 
                        yAxisId="left" 
                        domain={[1, 6]} 
                        reversed 
                        tickCount={6}
                        tick={{ fontSize: 11 }}
                        label={{ value: '내신 등급 (1등급이 최상)', angle: -90, position: 'insideLeft', offset: -5, style: { textAnchor: 'middle', fontSize: 10, fontFamily: 'serif' } }} 
                      />
                      
                      {/* Right Y-axis (Qualitative score of research depth) */}
                      <YAxis 
                        yAxisId="right" 
                        orientation="right" 
                        domain={[0, 6]} 
                        tickCount={7}
                        tick={{ fontSize: 11 }}
                        label={{ value: '탐구 진로 융합도 (정성 지표)', angle: 90, position: 'insideRight', offset: 5, style: { textAnchor: 'middle', fontSize: 10, fontFamily: 'serif' } }} 
                      />
                      
                      <Tooltip 
                        contentStyle={{ border: '1px solid black', fontFamily: 'sans-serif' }}
                        formatter={(value, name) => {
                          if (name === 'grade') return [`${value}등급`, '내신 등급'];
                          return [`${value}/5.0`, '탐구 융합도'];
                        }}
                      />
                      <Legend 
                        verticalAlign="top" 
                        height={36} 
                        iconType="square"
                        formatter={(value) => {
                          if (value === 'grade') return '내신 등급 (좌축)';
                          if (value === 'convergence') return '탐구 융합도 (정성 지표, 우축)';
                          return value;
                        }}
                      />
                      
                      <Line 
                        yAxisId="left" 
                        type="monotone" 
                        dataKey="grade" 
                        stroke="#185FA5" 
                        strokeWidth={3}
                        activeDot={{ r: 8 }} 
                        name="grade"
                        dot={{ r: 5, strokeWidth: 1 }}
                      />
                      <Line 
                        yAxisId="right" 
                        type="monotone" 
                        dataKey="convergence" 
                        stroke="#D85A30" 
                        strokeWidth={3}
                        strokeDasharray="5 5"
                        name="convergence"
                        dot={{ r: 5, shape: 'diamond' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center font-mono text-[10px] text-neutral-500 mt-2">
                  * 참고: 탐구 융합도는 탐구 주제의 공학적 응용성, 물리 개념 활용도, 탐구 완결성을 종합 평가한 자체 정성적 평가 수치입니다.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mt-4">
                <div className="border border-black/10 p-3 bg-neutral-50">
                  <span className="font-bold block mb-1">1학년 (순수 호기심)</span>
                  사이클로이드 곡선, 메르센 소수 귀류법 증명, 프랙탈 기하학 등 진로와의 연계성보다는 고등학교 수학 개념 자체에 깊이 매료된 탐색형 학습.
                </div>
                <div className="border border-black/10 p-3 bg-neutral-50">
                  <span className="font-bold block mb-1">2학년 (공학적 응용)</span>
                  테일러 급수와 뉴턴 랩슨법을 이용한 딥러닝 오차역전파 구현 및 라플라스 변환의 물리적 의미 탐색 등 교과 수학과 이공계 전공 기초 개념의 가교 구축.
                </div>
                <div className="border border-black/10 p-3 bg-neutral-50">
                  <span className="font-bold block mb-1">3학년 (해결 무기화)</span>
                  OFDM 통신의 변형으로 푸리에 및 웨이블릿 변환 적용, 유한차분법(FDM)을 이용한 전력 푸아송방정식 도출 등 수학을 실제 필드 문제를 해결하는 도구로 100% 활용.
                </div>
              </div>
            </div>

            {/* 3-3: Covering Weakness */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl md:text-2xl font-bold uppercase border-b border-black/20 pb-1 flex items-center gap-2">
                <Target size={18} /> 3-3. 수학 약점 커버 전략 (설계자 관점)
              </h3>
              <p className="text-neutral-700 leading-relaxed text-sm">
                저의 고교 생활 중 최대 약점은 낮은 수학 내신 등급(평균 4.25등급)이었습니다. 이를 보완하기 위해, 다음과 같은 전략을 구상해 다양한 주제탐구 및 비교과 활동을 진행했습니다.
              </p>
              
              <div className="bg-neutral-50 border border-black p-5 space-y-4">
                <h4 className="font-serif font-bold text-base uppercase text-red-900">
                  전략: "시험 점수 ≠ 수학적 사고력"임을 세부능력및특기사항(세특)으로 입증한다.
                </h4>
                <p className="text-neutral-700 text-sm leading-relaxed">
                  단순 기계적인 고속 풀이 능력이 부족할 뿐, 수학적 개념을 공학적으로 응용하고 전개하는 능력은 누구보다 탁월하다는 인상을 대학 사정관에게 전달하려 했습니다. 이를 위해 세특에 <strong>라그랑주 승수법 · 감마함수 n차원 일반화 · 삼각함수 직교성 증명</strong> 등, 통상 고교 1~2등급 수준을 훨씬 뛰어넘는 수학의 학문적 전개 과정을 세특 전체에 치밀하게 연출했습니다.
                </p>
                <div className="border-t border-black/10 pt-3">
                  <p className="text-xs font-mono text-black/80">
                    <strong>실제 결과:</strong> 1학년 6등급 저점 극복 → 2학년 수학Ⅱ에서 94점(2등급) 반등, 수학 우수 멘토 지정. 주력 전공 분야인 진로선택 과목(기하 · 수학과제탐구 · 고급물리학 · 물리학실험 · 전기전자기초)에서 전체 A를 취득하며, "내가 관심 있는 몰입 영역에서는 누구보다 뛰어남"을 성적으로도 증명해냈습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 3-4 & 3-5: Strengths & Weaknesses */}
            <div className="space-y-4 pt-6">
              <h3 className="font-serif text-xl md:text-2xl font-bold uppercase border-b border-black/20 pb-1 flex items-center gap-2">
                <Award size={18} /> 3-4. 생기부의 강점과 약점, 이를 활용한 지도 조언
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Strengths */}
                <div className="border border-black p-5 bg-white space-y-4 shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]">
                  <h4 className="font-serif font-bold uppercase text-lg border-b border-black pb-2 text-green-800">
                    DESIGN STRENGTHS (강점)
                  </h4>
                  <ol className="space-y-3 text-xs md:text-sm text-neutral-700 list-decimal pl-4">
                    <li>
                      <strong>주제 일관성 및 폭발적인 확장성:</strong> "전력 · 에너지" 단일 주제에 3년간 집요하게 연결하고 매년 심화.
                    </li>
                    <li>
                      <strong>수학을 도구로 부리는 확장 공식:</strong> 교과 개념 발견 → 파생 전공 개념 추적 → 진로 결합의 3단 패턴.
                    </li>
                    <li>
                      <strong>이론 → 가상 시뮬레이션 → 실측 검증:</strong> Ansys Maxwell, PSPICE, 아두이노, 3D프린터를 동원한 실제 물리적 검증 완결.
                    </li>
                    <li>
                      <strong>지식 전달의 리더십:</strong> 반장/부반장 3년 연속 수행, 오실로스코프 장비 사용법을 학급 조원들에게 직접 설명하고 전수하는 등 조교 역할의 실증적 프로토타입 보유.
                    </li>
                  </ol>
                </div>

                {/* Weaknesses to Counseling Advice */}
                <div className="border border-black p-5 bg-white space-y-4 shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]">
                  <h4 className="font-serif font-bold uppercase text-lg border-b border-black pb-2 text-red-800">
                    LIMITS TO COUNSELING (지도 조언)
                  </h4>
                  <ul className="space-y-3 text-xs md:text-sm text-neutral-700 list-disc pl-4">
                    <li>
                      <strong>낮은 수학 정량 등급:</strong> 세특의 정성 평가로 합격했으나 정량 1차 필터의 상존 위험. 학생에게 정량 최저 하한선의 심리적 중요성 전수 가능.
                    </li>
                    <li>
                      <strong>표면상 파편화된 진로 기재:</strong> 희망 분야의 단순 명칭이 바뀌어 일견 방황하는 것처럼 보임. 서사 통합성으로 이를 꿰매는 요령 지도.
                    </li>
                    <li>
                      <strong>의무 봉사 활동의 비연계성:</strong> 진로와 엮인 봉사 부재로 드러난 아쉬움. 학생 지도 시 봉사와 진로의 초반 설계 강조 가능.
                    </li>
                    <li className="bg-red-50 p-2 font-mono text-[11px] text-red-900 border border-red-200 list-none rounded">
                      "이 약점들은 제가 똑같은 함정을 먼저 겪은 선배이자 설계자로서, 학생들에게 가장 실용적인 함정 회피 경로를 짚어줄 수 있는 소중한 자산입니다."
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: University Journey */}
          <section id="capabilities" className="scroll-mt-24 space-y-8">
            <div className="border-b-2 border-black pb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-red-800 font-bold">04. UNIVERSITY CAPABILITIES</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase text-black">
                대학 진학 후 실행 — 전과 및 전공 역량
              </h2>
            </div>

            <p className="text-neutral-700 leading-relaxed text-sm">
              솔직하게 고백하면, 한양대 <strong>도시공학과</strong>에 진학했던 것은 수학 내신의 불리함을 극복하기 위해 입결 커트라인이 상대적으로 낮은 과를 영리하게 전술 배치한 우회 경로였습니다. 그러나 저의 궁극적인 지향점은 항상 <strong>'전력과 에너지'</strong>였기에, 대학 입학 후 즉시 원래의 목표인 <strong>전기공학전공으로의 전과</strong>를 과감하게 실행하고 뛰어난 성과로 가치를 입증했습니다.
            </p>

            {/* Part C-3: Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              {/* Stat 1 */}
              <div className="border-2 border-black p-5 bg-white text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase text-neutral-500 block mb-1">전과 후 전공 석차</span>
                  <span className="font-serif text-5xl md:text-6xl font-bold text-black block my-2">14 <span className="text-xl md:text-2xl text-neutral-500">/ 88명</span></span>
                </div>
                <div className="border-t border-black/10 pt-3 mt-3">
                  <p className="text-xs text-neutral-600 font-sans">
                    전공 전과 후 3학년 2학기 전기공학 전공 석차 상위 약 16% 이내 진입, 실전 전공 실력 완벽 검증.
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="border-2 border-black p-5 bg-white text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase text-neutral-500 block mb-1">학종 수시 최종 합격</span>
                  <span className="font-serif text-5xl md:text-6xl font-bold text-red-800 block my-2">7 <span className="text-xl md:text-2xl text-neutral-500">개교</span></span>
                </div>
                <div className="border-t border-black/10 pt-3 mt-3">
                  <p className="text-xs text-neutral-600 font-sans">
                    한양대, 서강대, 성균관대, 중앙대, 건국대, UNIST, DGIST 이공계 복수 최종 합격으로 입증된 설계 신뢰도.
                  </p>
                </div>
              </div>
            </div>

            {/* University Milestones details */}
            <div className="space-y-4">
              <h4 className="font-serif font-bold uppercase text-lg border-b border-black/20 pb-1">
                전과 후 축적한 실제 전기 · 에너지 분야 학문적 성과
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-black p-4 bg-neutral-50 space-y-2">
                  <div className="text-red-800 font-serif font-bold text-base uppercase">대회 입상</div>
                  <p className="text-xs font-bold font-mono">대한전기학회(KIEE) 동상</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    전기공학 전공 지식과 최신 블록체인 분산 기술을 융합한 토이 프로젝트로 입상하며 기술 수렴 실력 증명.
                  </p>
                </div>

                <div className="border border-black p-4 bg-neutral-50 space-y-2">
                  <div className="text-red-800 font-serif font-bold text-base uppercase">글로벌 연수</div>
                  <p className="text-xs font-bold font-mono">미국 DOE & 발전 연구소</p>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Energy Up! 2024 장학생 발탁. 미국 에너지부(DOE), GWU, 조지메이슨, 피츠버그대학 등 방문 및 실시간 DER, 데이터센터 전력망 전문가 면담 완료.
                  </p>
                </div>

                <div className="border border-black p-4 bg-neutral-50 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="text-red-800 font-serif font-bold text-base uppercase">학술 프로젝트</div>
                    <p className="text-xs font-bold font-mono">ASEAN 에너지 필드워크</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      말레이시아 등 동남아 신재생에너지 인프라 및 REC 거래 실무를 추적한 대형 프로젝트 완수.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-black/10 mt-2">
                    <Link 
                      to="/projects/malaysia" 
                      className="text-[10px] font-mono uppercase bg-black text-white py-1 px-2 inline-flex items-center gap-1 hover:bg-neutral-800 transition-colors w-full justify-center"
                    >
                      상세 프로젝트 보기 <ExternalLink size={10} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-red-50/50 border border-red-200 p-4 rounded text-xs leading-relaxed text-neutral-700">
                <strong>조교로서의 가치:</strong> 저는 교과서에 갇힌 낡은 지식이 아니라 <strong>"지금 글로벌 에너지와 인프라 시장이 어디로 움직이고 있는지"</strong> 최신의 실전 트렌드를 학생들에게 명확히 수혈해줄 수 있습니다. 이 경험은 학생들의 주제탐구를 박제된 시험공부용 서류에서 '현실 세상과 치열하게 연결된 유기적인 진짜 탐구'로 고도화하는 데 직접적으로 작동합니다.
              </div>
            </div>
          </section>

          {/* Section 5: Work Experience */}
          <section id="experience" className="scroll-mt-24 space-y-6">
            <div className="border-b-2 border-black pb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-red-800 font-bold">05. WORK EXPERIENCE</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase text-black">
                관련 업무 및 지도 경험
              </h2>
            </div>

            <p className="text-neutral-700 leading-relaxed text-sm">
              화려한 정량 자랑보다는 실제로 <strong>어떤 결을 가진 학생을 얼마나 구체적인 눈높이로 이끌어 보았는가</strong>에 대한 깊은 경력의 세부사항으로 신뢰를 드립니다.
            </p>

            <div className="space-y-4">
              {[
                {
                  role: "리베라 입시 컨설팅 — 학종 컨설턴트",
                  duration: "6개월 활동 • 학생 3명 밀착 배정",
                  desc: "학종 컨설팅, 6개월, 학생 3명 일대일 비대면 수업 진행. 학생부종합전형 수시 지망 학생들의 생기부 텍스트를 나노 단위로 정밀 분석하여 서사의 공백을 진단하고, 학생들의 진로에 맞춘 독자적인 탐구 로드맵을 가이드했습니다."
                },
                {
                  role: "페르마 수학학원 — 고등부 입시 조교",
                  duration: "고등부 학생 약 10명 담당",
                  desc: "고등부 입시 조교 및 교과 질문 해결(학생 10명). 학종 방향성 조언과 비교과 활동 지원을 수행했으며, 학부모님들을 대상으로 이공계 학종 생기부 설계 전략에 관한 소강의를 기획 및 진행했습니다."
                },
                {
                  role: "대학교 일반물리학 멘토",
                  duration: "Hanyang University • 한 학기 활동",
                  desc: "일반물리학 멘토 선정 및 한 학기 활동. 일반물리학 개념을 어려워하는 후배들을 위해 핵심 개념 원리 설명, 문제 풀이 접근 경로 안내 등을 주도하며 교육자 및 조교로서의 지식 전수 역량을 함양했습니다."
                }
              ].map((job, idx) => (
                <div key={idx} className="border border-black p-4 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-black pb-2 md:pb-0 md:pr-4">
                    <span className="font-serif font-bold block text-sm uppercase text-red-800">{job.role}</span>
                    <span className="font-mono text-[10px] text-neutral-500 block mt-1">{job.duration}</span>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-xs md:text-sm text-neutral-700 leading-relaxed">{job.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-black p-4 bg-neutral-900 text-white text-xs md:text-sm font-mono text-center">
              "학종 입시 전략과 이공계 교과 지도(수학·물리)가 정교하게 교차하는 지점, 그것이 제가 가장 자신 있게 수행할 수 있는 전문 영역입니다."
            </div>
          </section>

          {/* Section 6: Philosophy & Strengths */}
          <section id="philosophy" className="scroll-mt-24 space-y-8">
            <div className="border-b-2 border-black pb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-red-800 font-bold">06. PEDAGOGY & PHILOSOPHY</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase text-black">
                지도 강점
              </h2>
            </div>

            {/* B-4. 지도 강점 */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl md:text-2xl font-bold uppercase border-b border-black/25 pb-1">
                학종 지도 차별점 (Core Strengths)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "개별 맞춤형 멘토링",
                    desc: "학생의 고유한 교과 성적 분포와 기존 생기부 구성의 장단점을 다각도로 진단하여, 정량적인 약점을 보완하고 정성적 강점을 극대화하는 개별 지도안을 수립합니다."
                  },
                  {
                    title: "숨겨진 서사 복원 (스토리텔링)",
                    desc: "저학년 시기의 사소하거나 파편화되어 보이는 개별 탐구 활동일지라도, 하나의 일관된 진로 축과 심화 연구 흐름으로 꿰매어 생명력 있는 스토리로 재설계합니다."
                  },
                  {
                    title: "실무 SW 및 전문 툴 제시",
                    desc: "관련 학과 및 실제 산업 현장에서 활용하는 전문 소프트웨어/개발 툴(Ansys, Pspice, QGIS, 시뮬레이터 등)의 활용 경로를 제시하여 탐구의 공학적 전문성과 진로적합성을 한 차원 끌어올립니다."
                  },
                  {
                    title: "AI / AX 기술 접목 설계",
                    desc: "최신 AI 엔지니어링 및 디지털 전환 트렌드를 고교 비교과 활동과 탐구 주제에 자연스럽게 접목시켜, 차별화되고 시대적 요구에 맞는 고유한 생기부 포인트를 확보합니다."
                  }
                ].map((strength, idx) => (
                  <div key={idx} className="border border-black p-4 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-mono text-[10px] text-red-800 font-bold block mb-1">STRENGTH 0{idx+1}</span>
                    <h4 className="font-serif font-bold text-base uppercase text-black mb-2">{strength.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">{strength.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  );
}
