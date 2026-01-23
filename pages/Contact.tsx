
import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'LOGO',
    content: '',
    refLink: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8 bg-slate-950">
        <div className="text-center max-w-xl bg-white p-20 rounded-[80px] shadow-2xl animate-in zoom-in duration-700">
          <div className="w-24 h-24 bg-yellow-400 rounded-[40px] flex items-center justify-center mx-auto mb-10 text-slate-900">
            <CheckCircle2 size={60} />
          </div>
          <h2 className="text-5xl font-black mb-6 uppercase tracking-tighter">SENT SUCCESS!</h2>
          <p className="text-slate-600 text-xl mb-12 leading-relaxed font-medium">
            문의가 성공적으로 전달되었습니다.<br />
            확인 후 24시간 이내에 입력하신 연락처로 <br />전문 상담사가 안내해 드리겠습니다.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-slate-950 text-white px-12 py-5 rounded-3xl font-black text-xl hover:scale-105 transition-all uppercase tracking-widest"
          >
            CONFIRM
          </button>
        </div>
      </div>
    );
  }

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
          <span className="text-[25vw] font-black leading-none uppercase tracking-tighter">CONNECT</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-800 bg-slate-900/80 backdrop-blur-xl text-yellow-400 text-[11px] font-black tracking-[0.4em] mb-12 uppercase animate-in fade-in slide-in-from-left duration-700">
            <Sparkles size={14} /> Get in Touch
          </div>
          <h1 className="text-7xl md:text-[140px] font-black mb-10 tracking-tighter leading-none uppercase animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            LET'S <br />
            <span className="text-yellow-400 italic">CONNECT.</span>
          </h1>
          <p className="text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            성공적인 브랜드의 첫걸음을 헬로밍과 시작하세요. <br />
            프로젝트에 대한 고민을 남겨주시면 최적의 답을 찾아드립니다.
          </p>
        </div>
      </header>

      <section className="py-40 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="lg:col-span-1 space-y-16">
            <div>
              <h2 className="text-4xl font-black mb-12 tracking-tighter uppercase">QUICK CHAT</h2>
              <div className="space-y-6">
                <a href="https://open.kakao.com" target="_blank" className="flex items-center gap-6 group p-8 bg-yellow-400 rounded-[40px] transition-all hover:scale-105">
                  <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-yellow-400"><MessageCircle size={32} /></div>
                  <div>
                    <p className="text-xs font-black text-slate-900 uppercase tracking-widest opacity-60 mb-1">KakaoTalk</p>
                    <p className="text-slate-950 font-black text-2xl">@helloming</p>
                  </div>
                </a>
                <a href="mailto:design@helloming.com" className="flex items-center gap-6 group p-8 bg-slate-50 rounded-[40px] border border-slate-100 transition-all hover:bg-slate-100">
                  <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-white"><Mail size={32} /></div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-slate-900 font-black text-xl">design@helloming.com</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="bg-slate-950 text-white p-12 rounded-[50px] shadow-2xl">
              <h3 className="font-black text-2xl mb-8 uppercase tracking-tight">WORK HOURS</h3>
              <ul className="space-y-6 text-slate-400 text-lg font-medium">
                <li className="flex justify-between"><span>Weekday</span> <span className="text-white">10:00 - 18:00</span></li>
                <li className="flex justify-between"><span>Weekend</span> <span className="text-white">Closed</span></li>
                <li className="pt-6 border-t border-slate-800 text-sm leading-relaxed">원활한 상담을 위해 원하시는 무드의 레퍼런스나 기획안을 미리 준비해주시면 더 정교한 견적 산출이 가능합니다.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-12 md:p-20 rounded-[80px] shadow-2xl border border-slate-50">
              <h2 className="text-4xl font-black mb-12 tracking-tighter uppercase">INQUIRY FORM</h2>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label htmlFor="name" className="block text-sm font-black text-slate-400 uppercase tracking-widest">Name / Company *</label>
                    <input type="text" id="name" required className="w-full px-8 py-6 bg-slate-50 border-transparent rounded-3xl focus:bg-white focus:ring-4 focus:ring-yellow-400 outline-none transition-all font-bold text-xl" placeholder="성함 혹은 업체명을 적어주세요" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="phone" className="block text-sm font-black text-slate-400 uppercase tracking-widest">Phone *</label>
                    <input type="tel" id="phone" required className="w-full px-8 py-6 bg-slate-50 border-transparent rounded-3xl focus:bg-white focus:ring-4 focus:ring-yellow-400 outline-none transition-all font-bold text-xl" placeholder="010-0000-0000" value={formData.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-4">
                  <label htmlFor="service" className="block text-sm font-black text-slate-400 uppercase tracking-widest">Service Item *</label>
                  <select id="service" className="w-full px-8 py-6 bg-slate-50 border-transparent rounded-3xl focus:bg-white focus:ring-4 focus:ring-yellow-400 outline-none transition-all font-black text-xl appearance-none" value={formData.service} onChange={handleChange}>
                    <option value="LOGO">로고 디자인 / 브랜딩</option>
                    <option value="SNS">SNS 콘텐츠 / 카드뉴스</option>
                    <option value="WEB">홈페이지 / 랜딩페이지</option>
                    <option value="ETC">기타 상담 및 문의</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label htmlFor="content" className="block text-sm font-black text-slate-400 uppercase tracking-widest">Message Content *</label>
                  <textarea id="content" required rows={6} className="w-full px-8 py-6 bg-slate-50 border-transparent rounded-4xl focus:bg-white focus:ring-4 focus:ring-yellow-400 outline-none transition-all font-bold text-xl" placeholder="프로젝트의 목적, 희망 작업 분량 및 마감일 등을 상세히 적어주세요." value={formData.content} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-950 text-white py-8 rounded-3xl font-black text-2xl flex items-center justify-center gap-4 hover:bg-slate-800 transition-all shadow-2xl group uppercase tracking-widest">
                  SEND MESSAGE <Send size={28} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
