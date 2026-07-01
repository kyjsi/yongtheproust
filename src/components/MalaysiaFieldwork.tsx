import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Globe, FileText, BarChart2, ShieldCheck, MapPin } from 'lucide-react';

export default function MalaysiaFieldwork() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      {/* Back Buttons */}
      <div className="flex justify-between items-center border-b border-black pb-4 mb-8">
        <Link 
          to="/projects/highschool" 
          className="font-mono text-xs uppercase flex items-center gap-2 hover:underline hover:text-red-800"
        >
          <ArrowLeft size={14} /> Back to High School
        </Link>
        <span className="font-mono text-[10px] text-neutral-500 uppercase">
          ASEAN Region Fieldwork Archive
        </span>
      </div>

      <div className="space-y-8">
        {/* Editorial Title */}
        <div className="text-center space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-red-800 font-bold px-2 py-0.5 border border-red-800">
            ASEAN ENERGY TRANSITION RESEARCH
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
            말레이시아 에너지 필드워크
          </h1>
          <p className="font-sans text-neutral-600 text-sm md:text-base italic max-w-xl mx-auto">
            "동남아시아 신재생에너지 인프라 실태 분석 및 REC(Renewable Energy Certificate) 시장의 정합성 검증 연구"
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-neutral-500 pt-2">
            <span className="flex items-center gap-1"><MapPin size={12} /> 쿠알라룸푸르, 말레이시아</span>
            <span>•</span>
            <span>연구 기간: 2024.08</span>
          </div>
        </div>

        {/* Editorial Divider */}
        <div className="double-border h-2 border-y border-black"></div>

        {/* Big Banner Image */}
        <div className="newspaper-border p-2 bg-white">
          <img 
            src="https://picsum.photos/seed/malaysia-grid/900/450" 
            alt="Malaysia Grid Infrastructure" 
            className="w-full h-80 object-cover grayscale saturate-50 hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <span className="font-mono text-[9px] text-neutral-500 text-center block mt-2">
            Figure A: Representative image of Southeast Asian energy transmission lines and urban microgrid planning
          </span>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-neutral-800 leading-relaxed text-sm md:text-base">
          
          <div className="md:col-span-4 space-y-6">
            <div className="border border-black p-4 bg-neutral-50 space-y-4">
              <h3 className="font-serif font-bold uppercase text-sm border-b border-black pb-1">
                연구 개요 (Overview)
              </h3>
              <ul className="space-y-3 font-mono text-xs">
                <li>
                  <span className="text-neutral-500 block">SUBJECT</span>
                  ASEAN 지역 전력 계통 분석 및 친환경 에너지 정합성
                </li>
                <li>
                  <span className="text-neutral-500 block">METHODOLOGY</span>
                  현지 유관 기관 대면 인터뷰, 문헌 수집 및 GIS 데이터 분석
                </li>
                <li>
                  <span className="text-neutral-500 block">OUTCOME</span>
                  말레이시아 REC 검증 체계 공백 모델 제안
                </li>
              </ul>
            </div>

            <div className="border border-black p-4 bg-white space-y-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-serif font-bold uppercase text-xs">핵심 연구 지표</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-neutral-100 pb-1">
                  <span>REC 가격 변동폭</span>
                  <span className="font-mono font-bold">-24% (CAGR)</span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-1">
                  <span>이중 계산 위험도</span>
                  <span className="font-mono font-bold text-red-700 font-semibold">High (검증 한계)</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span>그리드 연계율</span>
                  <span className="font-mono font-bold">87.3% (서말레이시아)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-6">
            <h2 className="font-serif font-bold text-xl uppercase border-b border-black pb-1">
              1. 추진 배경 및 필요성
            </h2>
            <p>
              동남아시아(ASEAN) 국가들은 기후 변화 극복을 위해 적극적인 재생에너지 발전 목표를 제시하고 있습니다. 특히 말레이시아는 자국 내 재생에너지 발전 비중을 2050년까지 70%로 확대하는 구체적인 탄소중립 로드맵(NETR)을 전개하고 있습니다. 
            </p>
            <p>
              그러나 국가 간 그리드(Grid) 연계가 지연되고, 민간 중심의 자율적 인증 시장인 REC(Renewable Energy Certificate) 거래 제도가 아직 국제적인 표준(I-REC 등)과 마찰을 빚고 있어 실제 탄소 상쇄 성과의 신뢰성(정합성) 검증이 불확실하다는 문제의식에서 이 연구를 착수했습니다.
            </p>

            <h2 className="font-serif font-bold text-xl uppercase border-b border-black pb-1">
              2. 주요 연구 및 탐방 성과
            </h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="font-serif text-2xl font-bold text-red-800 font-mono">01</div>
                <div>
                  <h4 className="font-serif font-bold text-base">말레이시아 전력망(TNB) 및 탄소배출 추이 GIS 정밀 분석</h4>
                  <p className="text-xs text-neutral-600">
                    쿠알라룸푸르를 중심으로 구축된 서말레이시아 전력망(Tenaga Nasional Berhad)의 발전원 분포와 지리적 병목 구간을 공간정보(GIS) 분석을 기조로 시각화해, 송배전 손실률이 높은 한계 지역을 도출했습니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="font-serif text-2xl font-bold text-red-800 font-mono">02</div>
                <div>
                  <h4 className="font-serif font-bold text-base">현지 에너지 기업 및 글로벌 인증 기관 현장 인터뷰</h4>
                  <p className="text-xs text-neutral-600">
                    말레이시아 현지의 신재생에너지 발전 사업자들과 I-REC 인증 위탁 유관기관 전문가들과의 릴레이 면담을 성사시켰습니다. 재생에너지 생산량이 기업에 인도되는 과정에서 발생하는 '이중 계산(Double Counting)' 위험과 제도적 공백 요인을 추적했습니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="font-serif text-2xl font-bold text-red-800 font-mono">03</div>
                <div>
                  <h4 className="font-serif font-bold text-base">블록체인 분산 장부 기반의 투명한 REC 정합성 매핑 제안</h4>
                  <p className="text-xs text-neutral-600">
                    국가 간 전력거래(예: 말레이시아-싱가포르 RE 전송) 시, 친환경 성과가 중복 정산되지 않도록 방지하는 하이퍼레저(Hyperledger) 기반의 분산 증명 아키텍처 초안을 학술적으로 구안해 제안했습니다.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-serif font-bold text-xl uppercase border-b border-black pb-1">
              3. 연구 성과의 학술적 확장
            </h2>
            <p>
              이 연구를 통해 취득한 현지 인사이트는 대학교 전과 후 수행했던 다양한 전력·분산 원장 학술 활동의 강력한 토대가 되었습니다. 또한 이과 고등학생들이 가장 목말라하는 <strong>"이론(예: 기하, 코일 발전)이 어떻게 글로벌 산업 실무(ASEAN 국가 간 전력거래 정책)로 파생되어 스케일업하는가"</strong>에 대해 눈에 손에 잡히는 생생한 탐구 설계 지침을 주는 최고 수준의 조교 콘텐츠로 사용됩니다.
            </p>
          </div>

        </div>

        {/* Action Call / Navigation Back */}
        <div className="border border-black p-6 bg-neutral-50 text-center space-y-4">
          <h4 className="font-serif font-bold text-lg uppercase">
            전력 · 에너지 교육 설계자의 실전 역량
          </h4>
          <p className="max-w-xl mx-auto text-xs text-neutral-600">
            책 속의 가짜 스펙이 아닌, 전국의 이과 상위권 학생들이 꿈꾸는 해외 필드워크 연구를 몸소 수행한 선배로서 탐구 성과의 입체적인 심화 방식을 1:1로 지도합니다.
          </p>
          <div className="pt-2">
            <Link 
              to="/projects/highschool" 
              className="bg-black text-white hover:bg-neutral-800 transition-colors font-mono text-xs uppercase px-5 py-3 inline-flex items-center gap-2 shadow-[3px_3px_0px_0px_rgba(220,38,38,1)]"
            >
              <ArrowLeft size={14} /> 고등학교 조교 포트폴리오로 돌아가기
            </Link>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
