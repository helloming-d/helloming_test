
import React, { useState } from 'react';
import { PortfolioItem, ServiceType } from '../types';
import { Plus, Filter, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WorksProps {
  portfolio: PortfolioItem[];
}

const Works: React.FC<WorksProps> = ({ portfolio }) => {
  const [filter, setFilter] = useState<ServiceType>('ALL');

  const filteredItems = filter === 'ALL' 
    ? portfolio 
    : portfolio.filter(item => item.category === filter);

  const categories: { label: string; value: ServiceType }[] = [
    { label: 'ALL WORKS', value: 'ALL' },
    { label: 'BRAND LOGO', value: 'LOGO' },
    { label: 'SNS CONTENT', value: 'SNS' },
    { label: 'WEB / UIUX', value: 'WEB' },
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Unified Cinematic Hero Section */}
      <header className="relative min-h-[80vh] flex items-center bg-slate-950 text-white px-8 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.1),transparent_50%)]" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none pointer-events-none w-full text-center">
          <span className="text-[30rem] font-black leading-none uppercase tracking-tighter">ARCHIVE</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/80 text-yellow-400 text-[10px] font-black tracking-[0.4em] mb-8 uppercase">
                <Filter size={12} /> Curated Selection
              </div>
              <h1 className="text-7xl md:text-[140px] font-black leading-[0.85] tracking-tighter uppercase mb-8">
                THE<br />
                <span className="text-yellow-400">ARCHIVE.</span>
              </h1>
              <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
                헬로밍의 철학과 감각이 담긴 프로젝트 결과물입니다. <br />
                단순한 디자인을 넘어 비즈니스의 정체성을 완성한 기록들을 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Premium Navigation Filter */}
      <div className="sticky top-20 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`relative py-2 text-sm md:text-base font-black tracking-[0.2em] uppercase transition-all group ${
                  filter === cat.value 
                    ? 'text-slate-950' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {cat.label}
                <span className={`absolute -bottom-1 left-0 h-[3px] bg-yellow-400 transition-all duration-500 ${
                  filter === cat.value ? 'w-full' : 'w-0 group-hover:w-1/2'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Gallery Grid */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 gap-x-8 lg:gap-x-16">
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id} 
              className={`group relative flex flex-col animate-in fade-in slide-in-from-bottom duration-700 delay-${(idx % 3) * 100} ${
                idx % 5 === 0 ? 'md:col-span-12' : 
                idx % 5 === 1 ? 'md:col-span-7' : 
                idx % 5 === 2 ? 'md:col-span-5' : 
                idx % 5 === 3 ? 'md:col-span-5' : 
                'md:col-span-7'
              }`}
            >
              <div className={`relative overflow-hidden rounded-[40px] md:rounded-[80px] bg-slate-50 transition-all duration-700 shadow-sm group-hover:shadow-2xl ${
                idx % 5 === 0 ? 'aspect-[21/9]' : 'aspect-[4/5] md:aspect-square'
              }`}>
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-slate-950 scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                     <ArrowUpRight size={32} />
                   </div>
                </div>
                <div className="absolute top-8 right-8 md:top-12 md:right-12 z-10">
                   <span className="bg-white/90 backdrop-blur-md text-slate-950 px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase shadow-xl">
                     {item.category}
                   </span>
                </div>
              </div>
              <div className="mt-10 px-4 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <p className="text-xs font-black text-yellow-600 mb-3 tracking-[0.3em] uppercase">Client: {item.client || 'PREMIUM BRAND'}</p>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter uppercase leading-none mb-6">{item.title}</h3>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed line-clamp-2 max-w-xl group-hover:text-slate-800 transition-colors">{item.description}</p>
                </div>
                <div className="flex flex-col items-start md:items-end flex-shrink-0">
                   <p className="text-slate-300 font-black text-[10px] uppercase tracking-widest mb-1">Year</p>
                   <p className="text-slate-950 font-black text-2xl tracking-tighter">2024</p>
                </div>
              </div>
              {idx % 5 === 0 && (
                <div className="absolute -top-10 -left-10 text-[15rem] font-black text-slate-950 opacity-[0.03] select-none pointer-events-none hidden lg:block">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</div>
              )}
            </div>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="py-60 text-center">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-200"><Filter size={40} /></div>
            <p className="text-slate-300 text-4xl font-black uppercase tracking-widest">No Results Found</p>
            <button onClick={() => setFilter('ALL')} className="mt-10 text-slate-950 font-black border-b-2 border-yellow-400 pb-1 uppercase tracking-widest hover:text-yellow-600 transition-colors">Reset Filters</button>
          </div>
        )}
      </section>

      {/* Contact CTA */}
      <section className="relative py-60 px-8 bg-slate-950 text-white text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <span className="text-[30rem] font-black leading-none uppercase tracking-tighter">CONTACT</span>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">HAVE A <br /><span className="text-yellow-400">PROJECT?</span></h2>
          <p className="text-2xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto">당신의 아이디어를 실현할 준비가 되셨나요? <br />지금 바로 헬로밍과 함께 특별한 브랜드의 여정을 시작하세요.</p>
          <Link to="/contact" className="group relative inline-flex bg-yellow-400 text-slate-950 px-16 py-8 rounded-[40px] font-black text-2xl items-center gap-4 hover:scale-105 transition-all shadow-2xl uppercase tracking-widest">
            LET'S COLLABORATE 
            <Plus size={32} className="group-hover:rotate-90 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Works;
