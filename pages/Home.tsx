
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Heart, ChevronRight, Layout, Zap, Award, MousePointer2, Sparkles, Plus, Quote } from 'lucide-react';
import { PortfolioItem } from '../types';
import { REVIEWS } from '../constants';

interface HomeProps {
  portfolio: PortfolioItem[];
}

const Home: React.FC<HomeProps> = ({ portfolio }) => {
  return (
    <div className="overflow-hidden">
      {/* Increased pt-52 for a more spacious entrance */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-950 px-6 pt-52 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(250,204,21,0.08),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(250,204,21,0.05),transparent_50%)]" />
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-xl text-yellow-400 text-[11px] font-black tracking-[0.4em] mb-12 uppercase animate-in fade-in slide-in-from-left duration-700">
                <Sparkles size={14} /> 8 Years of Excellence
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-white leading-[0.85] tracking-tighter mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                <span className="block opacity-50 text-6xl md:text-7xl mb-2 tracking-[0.11em]">TRANSFORMING</span>
                YOUR BRAND <br />
                <span className="text-yellow-400 italic">VISUALS.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-400 mb-14 leading-relaxed max-w-2xl font-medium animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
                단순한 미학을 넘어 비즈니스의 성장을 설계합니다. <br />
                헬로밍은 300여 개의 브랜드와 함께 결과를 만드는 디자인을 완성해왔습니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
                <Link to="/contact" className="group relative overflow-hidden bg-yellow-400 text-slate-950 px-14 py-7 rounded-3xl font-black text-2xl flex items-center justify-center gap-3 hover:bg-white transition-all hover:scale-105 shadow-[0_20px_50px_rgba(250,204,21,0.2)]">
                  <span className="relative z-10">시작하기</span>
                  <ArrowRight size={28} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/works" className="px-14 py-7 rounded-3xl border-2 border-slate-800 text-white font-black text-2xl flex items-center justify-center gap-3 hover:bg-slate-900 transition-all hover:border-slate-700">
                  WORKS
                </Link>
              </div>

              <div className="mt-20 grid grid-cols-3 gap-8 border-t border-slate-900 pt-10 opacity-60">
                <div>
                  <p className="text-3xl font-black text-white mb-1">300+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white mb-1">99%</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Satisfaction</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white mb-1">8 Yrs</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Experience</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 relative group">
              <div className="relative z-10 animate-in fade-in zoom-in duration-1200 delay-300">
                <div className="relative p-4 md:p-8">
                  <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-yellow-400 rounded-tl-3xl z-20 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-yellow-400 rounded-br-3xl z-20 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                  
                  <div className="aspect-[4/5] rounded-[60px] overflow-hidden bg-slate-900 shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop" 
                      alt="Modern Abstract Design" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="absolute top-1/2 -left-12 lg:-left-20 -translate-y-1/2 bg-white p-8 rounded-[40px] shadow-2xl animate-float max-w-[200px] hidden md:block">
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center mb-4 text-slate-950">
                    <MousePointer2 size={24} />
                  </div>
                  <p className="text-slate-950 font-black text-lg leading-tight uppercase tracking-tighter">
                    Visual <br /> Strategy
                  </p>
                </div>

                <div className="absolute bottom-10 -right-8 bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl animate-bounce-slow hidden md:flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-yellow-400">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm uppercase tracking-widest">Premium</p>
                    <p className="text-slate-500 text-[10px] font-bold">Verified Studio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-60 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
          <span className="text-[30rem] font-black leading-none uppercase tracking-tighter">BELIEF</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <div className="inline-block px-6 py-2 bg-slate-50 rounded-full border border-slate-100 text-slate-400 font-black tracking-[0.4em] text-xs uppercase mb-8">
              Core Principles
            </div>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-950 mb-10 leading-none">
              OUR <br />
              <span className="text-yellow-400 uppercase">CORE VALUES.</span>
            </h2>
            <p className="text-slate-500 text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
              헬로밍이 지향하는 디자인의 본질과 가치입니다.<br />
              우리는 단순한 그림을 넘어 비즈니스의 철학을 시각화합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { 
                num: '01',
                icon: <Zap size={48} />, 
                title: 'PERFORMANCE', 
                subtitle: 'HIGH IMPACT DESIGN',
                desc: '데이터에 기반한 전략적 기획으로 실제 매출과 전환율을 극대화합니다. 예쁜 것을 넘어 팔리는 디자인을 추구합니다.' 
              },
              { 
                num: '02',
                icon: <Layout size={48} />, 
                title: 'AESTHETICS', 
                subtitle: 'MODERN & MINIMAL',
                desc: '트렌드를 선도하는 미니멀리즘과 세련된 감각으로 브랜드의 품격을 높입니다. 디테일의 차이가 명품을 만듭니다.' 
              },
              { 
                num: '03',
                icon: <Heart size={48} />, 
                title: 'PARTNERSHIP', 
                subtitle: 'DEDICATED SUPPORT',
                desc: '단순한 외주가 아닌, 당신의 비즈니스 성장을 함께 고민하는 든든한 파트너입니다. 성공적인 여정에 끝까지 함께합니다.' 
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`group relative p-12 lg:p-16 rounded-[60px] transition-all duration-700 overflow-hidden ${
                  idx === 1 ? 'bg-slate-950 text-white md:-translate-y-12 shadow-2xl shadow-slate-950/20' : 'bg-slate-50 text-slate-950 border border-slate-100'
                } hover:scale-[1.02]`}
              >
                <div className={`absolute -top-10 -right-4 text-9xl font-black opacity-[0.05] tracking-tighter ${idx === 1 ? 'text-white' : 'text-slate-950'}`}>
                  {item.num}
                </div>

                <div className={`mb-12 w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 ${
                  idx === 1 ? 'bg-yellow-400 text-slate-950' : 'bg-slate-950 text-white group-hover:bg-yellow-400 group-hover:text-slate-950'
                }`}>
                  {item.icon}
                </div>

                <div className="relative z-10">
                  <p className={`text-xs font-black tracking-[0.3em] uppercase mb-4 ${idx === 1 ? 'text-yellow-400/80' : 'text-yellow-600'}`}>
                    {item.subtitle}
                  </p>
                  <h3 className="text-4xl font-black mb-8 uppercase tracking-tighter">
                    {item.title}
                  </h3>
                  <div className={`w-12 h-1 mb-8 transition-all duration-500 group-hover:w-full ${idx === 1 ? 'bg-yellow-400' : 'bg-slate-950 group-hover:bg-yellow-400'}`} />
                  <p className={`text-lg leading-relaxed font-medium ${idx === 1 ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.desc}
                  </p>
                </div>
                <div className={`absolute bottom-0 left-0 w-full h-2 transition-all duration-500 ${idx === 1 ? 'bg-yellow-400' : 'bg-transparent group-hover:bg-yellow-400'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32">
            <div>
              <span className="text-yellow-400 font-black tracking-widest text-sm uppercase mb-6 block">Our Expertise</span>
              <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                WHAT WE <br /><span className="text-slate-700">MASTER.</span>
              </h2>
            </div>
            <p className="text-slate-400 text-xl max-w-md font-medium leading-relaxed">
              브랜드의 모든 고객 접점을 유기적으로 연결하는 프리미엄 디자인 솔루션을 제안합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'BRAND IDENTITY', cat: 'LOGO DESIGN', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071' },
              { title: 'SOCIAL CONTENT', cat: 'SNS MARKETING', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974' },
              { title: 'DIGITAL PLATFORM', cat: 'WEB / UIUX', img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936' }
            ].map((service, idx) => (
              <Link to="/services" key={idx} className="group relative aspect-[3/4] rounded-[50px] overflow-hidden bg-slate-900">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-30 transition-all duration-1000" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <p className="text-yellow-400 font-bold text-sm tracking-widest mb-2">{service.cat}</p>
                  <h3 className="text-3xl font-black group-hover:translate-x-2 transition-transform duration-500 uppercase">{service.title}</h3>
                  <div className="mt-8 flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    상세 서비스 보기 <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-60 px-6 bg-white relative overflow-hidden">
        <div className="absolute -right-20 top-40 opacity-[0.02] select-none pointer-events-none rotate-90 origin-center">
          <span className="text-[35rem] font-black leading-none uppercase tracking-tighter">PROJECTS</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
            <div>
              <div className="inline-block px-5 py-1.5 bg-yellow-400 text-slate-950 font-black tracking-[0.4em] text-[10px] uppercase mb-6">
                Portfolio Showcase
              </div>
              <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-950 uppercase leading-[0.85]">
                SELECTED <br />
                <span className="text-slate-300">WORKS.</span>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-8">
              <p className="text-slate-500 text-xl font-medium max-w-sm md:text-right leading-relaxed">
                시선을 압도하고 마음을 움직이는 헬로밍의 시그니처 프로젝트를 만나보세요.
              </p>
              <Link to="/works" className="group flex items-center gap-4 text-xl font-black text-slate-950 border-b-[6px] border-yellow-400 pb-2 hover:border-slate-950 transition-all uppercase">
                View All Projects <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            {portfolio.map((item, idx) => (
              <div 
                key={item.id} 
                className={`group relative overflow-hidden ${
                  idx % 4 === 0 ? 'md:col-span-12' : 
                  idx % 4 === 1 ? 'md:col-span-7' : 
                  idx % 4 === 2 ? 'md:col-span-5' : 
                  'md:col-span-12'
                }`}
              >
                <div className={`relative overflow-hidden rounded-[40px] md:rounded-[80px] bg-slate-100 transition-all duration-1000 ${
                  idx % 4 === 0 || idx % 4 === 3 ? 'aspect-[21/9]' : 'aspect-[4/5] md:aspect-square'
                }`}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  />
                  
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-12 backdrop-blur-sm">
                    <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-700 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-slate-950 mb-8">
                        <Plus size={40} />
                      </div>
                      <span className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-2xl font-black tracking-widest text-lg uppercase">
                        View Detail
                      </span>
                    </div>
                  </div>

                  {(idx % 4 === 0 || idx % 4 === 3) && (
                    <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 z-10 text-white group-hover:opacity-0 transition-opacity duration-500">
                      <span className="inline-block px-4 py-1 bg-yellow-400 text-slate-950 font-black text-xs uppercase tracking-widest mb-4">
                        Featured Work
                      </span>
                      <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase drop-shadow-2xl">
                        {item.title}
                      </h3>
                    </div>
                  )}
                </div>

                <div className="mt-8 px-4 md:px-10 flex justify-between items-end">
                  <div className="max-w-md">
                    <p className="text-xs font-black text-yellow-600 mb-3 tracking-[0.3em] uppercase">
                      {item.category} — {item.client || 'STUDIO WORK'}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tighter uppercase leading-none group-hover:text-yellow-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="hidden lg:block text-right">
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-2">Completion</p>
                    <p className="text-slate-950 font-black text-lg">2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Link to="/works" className="inline-flex items-center gap-4 bg-slate-950 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-yellow-400 hover:text-slate-950 transition-all shadow-xl group uppercase tracking-widest">
              Explore Entire Works <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* RE-DESIGNED Review Section: TRUST GALLERY */}
      <section className="py-60 px-6 bg-slate-950 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.05] pointer-events-none">
          <Quote className="w-full h-full text-white" strokeWidth={0.5} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-yellow-400 text-xs font-black tracking-[0.4em] mb-8 uppercase">
              What they say
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
              CLIENT <br />
              <span className="text-slate-700">FEEDBACK.</span>
            </h2>
            <p className="text-slate-400 text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
              수많은 클라이언트가 증명하는 결과와 신뢰.<br />
              우리는 디자인 그 이상의 가치를 고객에게 전달합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {REVIEWS.map((review, idx) => (
              <div 
                key={review.id} 
                className={`group relative p-12 md:p-16 rounded-[60px] transition-all duration-700 border border-slate-800 bg-slate-900/40 backdrop-blur-xl hover:bg-slate-900 hover:border-yellow-400/30 ${
                  idx === 1 ? 'lg:translate-y-12' : ''
                }`}
              >
                {/* Large Quote Mark */}
                <div className="absolute top-10 right-10 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity">
                  <Quote size={80} className="text-white" strokeWidth={1} />
                </div>

                <div className="flex text-yellow-400 mb-10 gap-1.5 animate-pulse-slow">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                <div className="relative mb-14">
                  <p className="text-white text-2xl md:text-3xl leading-[1.4] font-bold italic tracking-tight">
                    "{review.content}"
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-10 border-t border-slate-800/50">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center font-black text-slate-950 text-2xl shadow-lg">
                    {review.author[0]}
                  </div>
                  <div>
                    <span className="font-black text-white text-xl block mb-1 uppercase tracking-tight">
                      {review.author}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span className="text-slate-500 font-black text-xs uppercase tracking-widest">
                        {review.platform} Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            ))}
          </div>

          {/* Social Proof Stats */}
          <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-slate-800 pt-20 opacity-40">
             <div className="text-center">
               <p className="text-white text-3xl font-black mb-2 tracking-tighter uppercase">5.0 / 5.0</p>
               <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Average Rating</p>
             </div>
             <div className="text-center">
               <p className="text-white text-3xl font-black mb-2 tracking-tighter uppercase">300+</p>
               <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Happy Clients</p>
             </div>
             <div className="text-center">
               <p className="text-white text-3xl font-black mb-2 tracking-tighter uppercase">100%</p>
               <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Deadline Match</p>
             </div>
             <div className="text-center">
               <p className="text-white text-3xl font-black mb-2 tracking-tighter uppercase">85%</p>
               <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Return Rate</p>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-52 px-6 bg-yellow-400 text-slate-950 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none opacity-10">
          <span className="text-[25rem] font-black whitespace-nowrap leading-none tracking-tighter uppercase">Hello-ming</span>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-6xl md:text-9xl font-black mb-16 leading-[0.85] tracking-tighter uppercase">
            READY TO <br />START?
          </h2>
          <p className="text-2xl font-black mb-12 opacity-80 uppercase">당신의 브랜드가 주인공이 될 시간입니다.</p>
          <Link to="/contact" className="inline-flex bg-slate-950 text-white px-20 py-8 rounded-3xl font-black text-2xl items-center gap-4 hover:scale-105 transition-all shadow-2xl active:scale-95 group uppercase">
            프로젝트 문의하기 <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
