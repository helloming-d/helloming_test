
import React from 'react';
import { Target, Users, Award, Zap, Heart, ArrowRight, Sparkles, CheckCircle2, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
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
          <span className="text-[30rem] font-black leading-none uppercase tracking-tighter">STUDIO</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-xl text-yellow-400 text-xs font-black tracking-[0.4em] mb-12 uppercase animate-in fade-in slide-in-from-left duration-700">
                <Sparkles size={14} /> Beyond Aesthetics
              </div>
              <h1 className="text-7xl md:text-[140px] font-black mb-12 tracking-tighter leading-[0.85] uppercase animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                DESIGN IS <br />
                <span className="text-yellow-400 italic">STRATEGY.</span>
              </h1>
              <p className="text-2xl md:text-3xl text-slate-400 max-w-3xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
                헬로밍은 단순히 예쁜 그림을 그리는 곳이 아닙니다. <br />
                비즈니스의 본질을 꿰뚫는 시각적 언어로 <br />
                브랜드의 미래를 설계하는 디자인 파트너입니다.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="py-60 px-8 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-60">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-[100px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-100 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Studio Vision" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-400 rounded-[80px] -z-0 opacity-10 blur-[100px]" />
              <div className="absolute -top-10 -right-10 bg-slate-950 p-12 rounded-[60px] shadow-2xl z-20 hidden md:block border border-slate-900">
                <p className="text-yellow-400 text-5xl font-black tracking-tighter mb-2">300+</p>
                <p className="text-white text-xs font-black uppercase tracking-[0.2em] opacity-60">Projects Delivered</p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-5 py-1.5 bg-slate-950 text-white font-black tracking-[0.4em] text-[10px] uppercase mb-10">
                The Philosophy
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9] text-slate-950">
                WHY <br />
                <span className="text-slate-300">HELLO-MING?</span>
              </h2>
              <div className="space-y-10 text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
                <p>
                  수많은 디자인이 범람하는 시대입니다. 하지만 고객의 뇌리에 깊게 박히는 '진짜' 디자인은 명확한 <span className="text-slate-950 font-black border-b-4 border-yellow-400">비즈니스 전략</span>과 깊은 고민에서 시작됩니다.
                </p>
                <p>
                  헬로밍은 디자인을 시작하기 전, 브랜드의 위치와 타겟 고객의 심리를 먼저 분석합니다. 8년차 실무 디자이너의 노하우는 오직 당신의 비즈니스 성공을 위해 발휘됩니다.
                </p>
                <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 gap-12">
                   <div className="group">
                     <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-yellow-400 mb-8 group-hover:bg-yellow-400 group-hover:text-slate-950 transition-all duration-500">
                       <Zap size={32} />
                     </div>
                     <h4 className="text-2xl font-black text-slate-950 uppercase mb-4">Speed & Precision</h4>
                     <p className="text-lg text-slate-500 font-medium">정해진 일정 내에 최상의 퀄리티를 구현하는 시스템을 갖추고 있습니다.</p>
                   </div>
                   <div className="group">
                     <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-yellow-400 mb-8 group-hover:bg-yellow-400 group-hover:text-slate-950 transition-all duration-500">
                       <Award size={32} />
                     </div>
                     <h4 className="text-2xl font-black text-slate-950 uppercase mb-4">Elite Quality</h4>
                     <p className="text-lg text-slate-500 font-medium">타협하지 않는 디테일로 브랜드의 품격을 압도적으로 높여드립니다.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="py-40 px-8 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
            {[
              { label: 'Successful Projects', val: '300+' },
              { label: 'Client Satisfaction', val: '99%', sub: 'Based on feedback' },
              { label: 'Professional Exp.', val: '8Y+', sub: 'Senior Designer' },
              { label: 'Client Retention', val: '85%', sub: 'Returning customers' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="w-12 h-1 bg-yellow-400 mb-10 group-hover:w-full transition-all duration-700" />
                <p className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">{stat.val}</p>
                <div>
                   <p className="text-sm font-black text-yellow-400 uppercase tracking-widest mb-2">{stat.label}</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.sub || 'Worldwide'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      <section className="py-60 px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <div className="inline-block px-5 py-1.5 bg-yellow-400 text-slate-950 font-black tracking-[0.4em] text-[10px] uppercase mb-8">
              Who we work with
            </div>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-950 uppercase leading-none mb-10">
              IS IT <br />
              <span className="text-slate-300">FOR YOU?</span>
            </h2>
            <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              헬로밍은 성장하고자 하는 의지가 확실한 브랜드와 대표님을 위해 최고의 시너지를 낼 준비가 되어 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'STARTUPS', desc: '사업 초기 브랜드 정체성을 확고히 잡고 싶은 분', icon: <Target /> },
              { title: 'GROWTH', desc: '기존 SNS 광고 효율이 낮아 고퀄리티 기획이 필요한 분', icon: <Sparkles /> },
              { title: 'REBRANDING', desc: '전문성과 신뢰감을 주는 모던한 로고가 필요한 브랜드', icon: <Zap /> },
              { title: 'WEB UI', desc: '내용은 좋지만 디자인이 아쉬운 홈페이지를 가진 기업', icon: <Monitor /> },
              { title: 'PARTNERSHIP', desc: '빠르고 정확한 소통과 마감을 중요시하는 대표님', icon: <Users /> },
              { title: 'PREMIUM', desc: '합리적인 비용으로 최상의 디자인 퀄리티를 원하는 분', icon: <Award /> }
            ].map((item, i) => (
              <div key={i} className="group relative p-12 rounded-[60px] bg-slate-50 border border-slate-100 hover:bg-slate-950 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl">
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-slate-950 mb-10 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h4 className="text-2xl font-black text-slate-950 mb-6 uppercase tracking-tighter group-hover:text-white transition-colors">{item.title}</h4>
                <p className="text-lg text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 transition-colors">{item.desc}</p>
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                  <CheckCircle2 className="text-yellow-400" size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="relative py-60 px-8 bg-slate-950 text-white text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none opacity-[0.03]">
          <Heart className="w-[100%] h-[100%] text-white" strokeWidth={0.5} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-slate-950 mx-auto mb-16 animate-pulse-slow">
            <Heart size={48} fill="currentColor" />
          </div>
          <h3 className="text-4xl md:text-6xl font-black mb-12 italic tracking-tighter leading-tight uppercase">
            “당신의 성공이 곧 <br />
            <span className="text-yellow-400">우리의 포트폴리오</span>입니다.”
          </h3>
          <p className="text-2xl text-slate-400 leading-relaxed font-medium mb-20 max-w-2xl mx-auto">
            헬로밍은 결과물에 이름을 걸고 작업합니다. <br />
            비즈니스의 가치를 높이는 여정에 기꺼이 함께하겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/contact" className="group bg-yellow-400 text-slate-950 px-16 py-8 rounded-3xl font-black text-2xl flex items-center gap-4 hover:scale-110 transition-all shadow-2xl uppercase tracking-widest">
              Let's Talk <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform" />
            </Link>
            <Link to="/works" className="text-xl font-black text-white border-b-4 border-slate-700 pb-2 hover:border-yellow-400 transition-all uppercase tracking-widest">
              View Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
