
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, PlusCircle, LayoutDashboard, Mail, MessageCircle } from 'lucide-react';
import { PortfolioItem } from './types';
import { INITIAL_PORTFOLIO } from './constants';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Works from './pages/Works';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('hello-ming-portfolio');
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
  });

  useEffect(() => {
    localStorage.setItem('hello-ming-portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  const addPortfolioItem = (item: PortfolioItem) => {
    setPortfolio([item, ...portfolio]);
  };

  const deletePortfolioItem = (id: string) => {
    setPortfolio(portfolio.filter(p => p.id !== id));
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* pt-24 ensures the fixed navbar (h-24) doesn't overlap content on load */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home portfolio={portfolio.slice(0, 4)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works portfolio={portfolio} />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/admin" 
              element={<Admin portfolio={portfolio} onAdd={addPortfolioItem} onDelete={deletePortfolioItem} />} 
            />
          </Routes>
        </main>

        <Footer />
        
        {/* Floating Contact Buttons for Mobile */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 md:hidden">
          <a href="http://pf.kakao.com/_MeShX/chat" target="_blank" rel="noreferrer" className="bg-yellow-400 p-4 rounded-full shadow-lg text-slate-900 transition-transform hover:scale-110 active:scale-95">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
