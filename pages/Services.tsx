
import React from 'react';
import { Palette, Share2, Monitor, ArrowRight, Check, Target, Compass, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 'logo',
      title: 'BRAND IDENTITY / LOGO',
      icon: <Palette size={60} />,
      desc: '단순한 심볼을 넘어 브랜드의 영혼과 가치를 시각적 언어로 정립합니다.',
      details: [
        '커스텀 타이포그래피 및 심볼 디자인',
        '브랜드 아이덴티티 전략 기획 (Color, Font System)',
        '애플리케이션 시스템 (명함, 서식류, 굿즈)',
        '브랜드 비주얼 가이드라인 (BX 가이드북)'
      ],
      tags: ['#Branding', '#Strategy', '#Visual_Identity'],
      img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071'
    },
    {
      id: 'sns',
      title: 'SOCIAL & MARKETING CONTENT',
      icon: <Share2 size={60} />,
      desc: '수만 개의 정보 속에서 고객의 시선을 0.5초 만에 멈추게 하는 전략적 비주얼입니다.',
      details: [
        '고전환 퍼포먼스 카드뉴스 디자인',
        '인스타그램 무드 보드 및 그리드 기획',
        '프로모션 랜딩 및 이벤트 배너 시스템',
        '유튜브 썸네일 및 채널 브랜딩'
      ],
      tags: ['#SNS_Marketing', '#Conversion', '#Trend_Visual'],
      img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974'
    },
    {
      id: 'web',
      title: 'DIGITAL PLATFORM / UIUX',
      icon: <Monitor size={60} />,
      desc: '사용자의 경험을 디자인하여 비즈니스의 신뢰도를 구축하고 전환율을 높입니다.',
      details: [
        '전환 최적화(CRO) 원페이지 랜딩페이지',
        '사용자 중심 UI/UX 레이아웃 설계',
        '반응형 웹 디자인 (PC/Mobile/Tablet)',
        '노코드 툴(아임웹, 식스샵) 커스텀 제작'
      ],
      tags: ['#Landing_Page', '#UIUX', '#Conversion_Rate'],
      img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936'
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Unified Cinematic Hero Section */}
      <header className="relative min-h-[80vh] flex items-center bg-slate-950 text-white px-8 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(250,204,21,0.08),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.05),transparent_50%)]" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none pointer-events-none w-full text-center">
          <span className="text-[30rem] font-black leading-none uppercase tracking-tighter">SERVICES</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-yellow-400 text-sm font-black tracking-[0.4em] mb-12 uppercase animate-in fade-in slide-in-from-bottom duration-700">
            Design Expertise
          </div>
          <h1 className="text-7xl md:text-[140px] font-black mb-12 tracking-tighter leading-[0.85] uppercase animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            TAILORED<br />
            <span className="text-yellow-400">SOLUTIONS.</span>
          </h1>
          <p className="text-2xl text-slate-400 max-w-3xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            당신의 비즈니스가 마주한 문제를 디자인으로 해결합니다. <br />
            업종의 특성과 브랜드의 목표를 분석하여 최상의 비주얼 솔루션을 제안합니다.
          </p>
        </div>
      </header>

      {/* Main Services List */}
      <section className="py-60 px-8">
        <div className="max-w-7xl mx-auto space-y-60">
          {services.map((service, idx) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full relative group">
                <div className="aspect-[4/5] md:aspect-square rounded-[80px] overflow-hidden bg-slate-100 shadow-2xl relative z-10">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-[40px] -z-0 blur-3xl opacity-20 animate-pulse" />
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-slate-900 rounded-[40px] -z-0 opacity-10 blur-2xl" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-12 h-[2px] bg-yellow-400" />
                  <span className="text-yellow-600 font-black tracking-[0.4em] text-sm uppercase">Expertise 0{idx + 1}</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter uppercase leading-none text-slate-950">{service.title}</h2>
                <p className="text-2xl text-slate-600 mb-12 leading-relaxed font-bold">{service.desc}</p>
                <div className="space-y-6 mb-16">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="mt-1.5 w-6 h-6 bg-slate-950 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-colors">
                        <Check size={14} className="text-white group-hover:text-slate-950 font-bold" />
                      </div>
                      <span className="text-xl text-slate-800 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mb-16">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-6 py-2 bg-slate-50 border border-slate-100 rounded-full text-slate-400 font-black text-xs uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-6 text-2xl font-black text-slate-950 group uppercase tracking-tight">
                  PROJECT INQUIRY 
                  <div className="w-16 h-16 bg-yellow-400 rounded-[28px] flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-yellow-400/20">
                    <ArrowRight size={32} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-40 px-8 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center lg:text-left">
             <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8">OUR CRAFT<br /><span className="text-slate-700">PHILOSOPHY.</span></h2>
             <p className="text-xl text-slate-400 font-medium">단순한 외주 작업이 아닌, 브랜드의 미래를 함께 설계하는 과정입니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Compass />, title: 'STRATEGY-LED', desc: '데이터와 시장 분석을 통해 브랜드가 나아가야 할 올바른 비주얼 전략을 도출합니다.' },
              { icon: <Sparkles />, title: 'AESTHETIC EDGE', desc: '세밀한 그리드와 폰트 정렬, 감각적인 컬러 시스템으로 압도적 완성도를 선사합니다.' },
              { icon: <Target />, title: 'RESULT-DRIVEN', desc: '심미성을 넘어 실제 고객의 반응과 전환율을 이끌어내는 퍼포먼스 디자인을 지향합니다.' }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900/50 p-16 rounded-[60px] border border-slate-800 hover:border-yellow-400/50 transition-all duration-500 group">
                <div className="w-20 h-20 bg-yellow-400 rounded-3xl flex items-center justify-center text-slate-950 mb-10 group-hover:rotate-6 transition-transform">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 40 })}
                </div>
                <h3 className="text-3xl font-black mb-6 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-60 px-8 bg-yellow-400 text-slate-950 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none opacity-10">
          <span className="text-[30rem] font-black whitespace-nowrap leading-none tracking-tighter uppercase">SERVICES</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-9xl font-black mb-16 leading-[0.85] tracking-tighter uppercase">
            NEED A <br />
            <span className="italic">CUSTOM</span> WORK?
          </h2>
          <p className="text-2xl font-black mb-16 opacity-80 uppercase tracking-tighter">
            상기 서비스 외에 기업 맞춤형 디자인 프로젝트도 가능합니다.<br />
            지금 바로 당신의 아이디어를 헬로밍에게 들려주세요.
          </p>
          <Link to="/contact" className="inline-flex bg-slate-950 text-white px-20 py-10 rounded-[40px] font-black text-2xl items-center gap-4 hover:scale-105 transition-all shadow-2xl active:scale-95 group uppercase tracking-widest">
            START NOW <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
