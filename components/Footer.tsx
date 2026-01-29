
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/" className="text-3xl font-black tracking-tighter mb-4 block">
            Hello-ming<span className="text-yellow-400">.</span>
          </Link>
          <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
            보기만 예쁜 디자인이 아니라, 매출과 브랜드를 생각하는 디자인을 합니다. 
            소상공인부터 스타트업까지 신뢰할 수 있는 파트너가 되어 드립니다.
          </p>
          <div className="flex gap-4">
            <span className="bg-slate-800 px-3 py-1 rounded-full text-xs text-slate-300">#로고디자인</span>
            <span className="bg-slate-800 px-3 py-1 rounded-full text-xs text-slate-300">#SNS콘텐츠</span>
            <span className="bg-slate-800 px-3 py-1 rounded-full text-xs text-slate-300">#홈페이지</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Menu</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/about" className="hover:text-yellow-400 transition-colors">소개</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400 transition-colors">서비스</Link></li>
            <li><Link to="/works" className="hover:text-yellow-400 transition-colors">포트폴리오</Link></li>
            <li><Link to="/process" className="hover:text-yellow-400 transition-colors">작업 프로세스</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="whitespace-nowrap text-sm sm:text-base pr-4">Email: hello--ming@naver.com</li>
            <li>Kakao: 헬로밍</li>
            <li>Time: 10:00 - 18:00 (Weekday)</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Hello-ming Design Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
