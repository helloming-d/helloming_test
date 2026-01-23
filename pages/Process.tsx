
import React from 'react';
import { MessageSquare, Target, PenTool, Lightbulb, CheckCircle, ArrowRight, Sparkles, Zap, ShieldCheck, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={28} />,
  Target: <Target size={28} />,
  PenTool: <PenTool size={28} />,
  Lightbulb: <Lightbulb size={28} />,
  CheckCircle: <CheckCircle size={28} />,
};

const processImages = [
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop"
];

const Process: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Standardized Cinematic Hero Section - Increased pt-52 */}
      <header className="relative min-h-[85vh] flex items-center bg-slate-950 text-white px-8 pt-52 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(250,204,21,0.08),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.05),transparent_50%)]" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none pointer-events-none w-full text-center">
          <span className="text-[25vw] font-black leading-none uppercase tracking-tighter">FLOW</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-xl text-yellow-400 text-[11px] font-black tracking-[0.4em] mb-12 uppercase animate-in fade-in slide-in-from-left duration-700">
                <Zap size={14} /> Workflow Strategy
              </div>
              <h1 className="text-7xl md:text-[140px] font-black leading-[0.85] tracking-tighter text-white uppercase mb-8">
                THE <br />
                <span className="text-yellow-400 italic">PROCESS.</span>
              </h1>
              <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                헬로밍의 디자인은 철저한 분석에서 시작됩니다. <br />
                결과물의 퀄리티를 보장하는 <br />
                체계적인 5단계 워크플로우를 소개합니다.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Process Timeline Section */}
      <section className="py-40 px-8 relative overflow-hidden">
        <div className="hidden lg:block absolute left-1/2 top-60 bottom-60 w-px bg-slate-100 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto">
          <div className="space-y-40 md:space-y-60">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.step} className={`relative flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className={`max-w-xl ${idx % 2 !== 0 ? 'lg:ml-auto lg:text-right' : ''}`}>
                    <div className={`inline-flex items-center gap-4 mb-10 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-16 h-16 bg-slate-950 text-yellow-400 rounded-2xl flex items-center justify-center shadow-xl">{iconMap[step.icon]}</div>
                      <span className="text-slate-950 font-black tracking-widest text-lg uppercase">STEP 0{step.step}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-10">{step.title}</h2>
                    <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-12">{step.description}</p>
                    <div className={`flex items-center gap-4 text-slate-400 font-black text-sm uppercase tracking-widest ${idx % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                       <Zap size={16} className="text-yellow-400" /> 
                       <span>Precision Execution</span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-slate-950 rounded-full z-20 items-center justify-center shadow-lg"><div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping" /></div>
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="aspect-[4/3] rounded-[40px] md:rounded-[60px] overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl relative">
                      <img src={processImages[idx]} alt={`${step.title} Vision`} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all duration-700" />
                      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                        <div className="flex items-center gap-3 mb-2">
                           <span className="w-8 h-px bg-yellow-400" />
                           <span className="text-yellow-400 font-black tracking-[0.3em] text-[10px] uppercase">Design Vision</span>
                        </div>
                        <h4 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter drop-shadow-2xl">VISION 0{step.step}</h4>
                      </div>
                    </div>
                    <div className={`absolute -z-10 w-full h-full border-2 border-slate-100 rounded-[60px] transition-all duration-1000 group-hover:translate-x-6 group-hover:translate-y-6 ${idx % 2 === 0 ? 'top-6 left-6' : 'top-6 right-6'}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Policy Section */}
      <section className="py-60 px-8 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
          <span className="text-[40rem] font-black leading-none uppercase tracking-tighter text-slate-950">TRUST</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-4">
              <div className="inline-block px-5 py-2 bg-yellow-400 text-slate-950 font-black tracking-[0.4em] text-[10px] uppercase mb-10">
                Studio Standard
              </div>
              <h3 className="text-5xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9] mb-12">
                CLIENT <br />
                <span className="text-slate-300">PROMISE.</span>
              </h3>
              <p className="text-2xl text-slate-500 font-medium leading-relaxed">
                헬로밍은 결과물에 대한 <span className="text-slate-950 font-black">책임</span>을 집니다. <br />
                신뢰를 디자인의 최우선 가치로 생각하며 <br />
                전문가로서의 약속을 반드시 지킵니다.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {[
                  { 
                    icon: <ShieldCheck size={36} />, 
                    title: "100% 마감 엄수", 
                    desc: "모든 프로젝트는 약속된 기한 내에 반드시 전달됩니다. 시간 엄수는 신뢰의 기본입니다." 
                  },
                  { 
                    icon: <Zap size={36} />, 
                    title: "전략적 시각화", 
                    desc: "매출과 브랜드 가치를 동시에 높이는 디자인을 제안합니다. 팔리는 디자인의 정석을 보여드립니다." 
                  },
                  { 
                    icon: <Sparkles size={36} />, 
                    title: "압도적 디테일", 
                    desc: "픽셀 하나까지 정제된 최상의 퀄리티를 지향합니다. 디테일이 브랜드의 격을 결정합니다." 
                  },
                  { 
                    icon: <Clock size={36} />, 
                    title: "실시간 피드백", 
                    desc: "빠르고 정확한 소통으로 작업의 완결성을 높입니다. 진행 상황을 투명하게 공유합니다." 
                  }
                ].map((item, i) => (
                  <div key={i} className="group relative bg-white p-12 rounded-[50px] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-yellow-400 transition-all duration-500">
                    <div className="w-20 h-20 bg-slate-950 text-yellow-400 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h4 className="text-2xl font-black text-slate-950 mb-6 uppercase tracking-tight group-hover:text-yellow-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-lg text-slate-500 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                    <div className="absolute top-8 right-8 w-2 h-2 bg-slate-100 rounded-full group-hover:bg-yellow-400 group-hover:scale-150 transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-60 px-8 bg-slate-950 text-white text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(250,204,21,0.05),transparent_50%)]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter uppercase leading-[0.85]">START YOUR <br /><span className="text-yellow-400">EVOLUTION.</span></h2>
          <p className="text-2xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto">체계적인 프로세스로 브랜드의 미래를 바꾸세요. <br />헬로밍이 당신의 든든한 파트너가 되어 드립니다.</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/contact" className="group relative px-20 py-8 bg-yellow-400 text-slate-950 rounded-[40px] font-black text-2xl flex items-center gap-4 hover:scale-105 transition-all shadow-2xl uppercase tracking-widest overflow-hidden">프로젝트 의뢰하기 <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
