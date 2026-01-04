
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'WORKS', path: '/works' },
    { name: 'PROCESS', path: '/process' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'h-20 bg-white/90 backdrop-blur-2xl border-b border-slate-100 py-0 shadow-sm' : 'h-24 bg-transparent py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        <Link to="/" className="text-3xl font-black tracking-tighter text-slate-950 flex items-center gap-1 group">
          Hello-ming<span className="text-yellow-400 group-hover:translate-x-1 transition-transform">.</span>
        </Link>

        {/* Desktop Menu - Increased size and font weight */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-black tracking-tight transition-all hover:text-yellow-500 relative py-1 ${
                isActive(item.path) 
                ? 'text-slate-950 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-yellow-400' 
                : 'text-slate-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/admin"
            className="px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-slate-400 border border-slate-200 rounded-full hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-all ml-4"
          >
            ADMIN
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-950 p-3 hover:bg-slate-100 rounded-2xl transition-colors">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 h-screen bg-white z-[101] flex flex-col p-8 animate-in fade-in slide-in-from-top duration-500">
          <div className="flex justify-between items-center mb-20">
             <Link to="/" onClick={() => setIsOpen(false)} className="text-3xl font-black tracking-tighter text-slate-950">Hello-ming<span className="text-yellow-400">.</span></Link>
             <button onClick={() => setIsOpen(false)} className="p-3 bg-slate-50 rounded-2xl"><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-5xl font-black tracking-tighter ${
                  isActive(item.path) ? 'text-yellow-400' : 'text-slate-950'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-10 border-t border-slate-100">
             <p className="text-slate-400 font-bold mb-4 uppercase tracking-widest">Administrator</p>
             <Link to="/admin" onClick={() => setIsOpen(false)} className="text-2xl font-black text-slate-900 underline">LOGIN</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
