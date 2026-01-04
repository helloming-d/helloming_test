
import React, { useState } from 'react';
import { PortfolioItem, ServiceType } from '../types';
import { Plus, Trash2, Lock, LayoutDashboard } from 'lucide-react';

interface AdminProps {
  portfolio: PortfolioItem[];
  onAdd: (item: PortfolioItem) => void;
  onDelete: (id: string) => void;
}

const Admin: React.FC<AdminProps> = ({ portfolio, onAdd, onDelete }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [newItem, setNewItem] = useState({
    title: '',
    category: 'LOGO' as ServiceType,
    description: '',
    imageUrl: '',
    client: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1111') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('비밀번호가 올바르지 않습니다.');
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const item: PortfolioItem = {
      ...newItem,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: Date.now()
    };
    onAdd(item);
    setNewItem({
      title: '',
      category: 'LOGO',
      description: '',
      imageUrl: '',
      client: ''
    });
    alert('새 프로젝트가 등록되었습니다!');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8 bg-slate-50">
        <div className="max-w-md w-full bg-white p-16 rounded-[60px] shadow-2xl border border-slate-100">
          <div className="w-20 h-20 bg-slate-950 rounded-3xl flex items-center justify-center text-white mx-auto mb-10">
            <Lock size={40} />
          </div>
          <h1 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter">ADMIN LOGIN</h1>
          <form onSubmit={handleLogin} className="space-y-10">
            <div className="space-y-4">
              <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-8 py-5 bg-slate-50 border-transparent rounded-2xl focus:bg-white focus:ring-4 focus:ring-yellow-400 outline-none transition-all text-2xl font-black tracking-widest text-center"
                placeholder="****"
              />
              {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}
            </div>
            <button className="w-full bg-slate-950 text-white py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all uppercase tracking-widest">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-32 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-24">
        <div>
          <h1 className="text-6xl font-black mb-4 flex items-center gap-6 uppercase tracking-tighter">
            <LayoutDashboard size={48} className="text-yellow-500" /> DASHBOARD
          </h1>
          <p className="text-slate-500 text-xl font-medium">헬로밍 포트폴리오의 실시간 관리 시스템입니다.</p>
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="text-lg font-black text-slate-400 hover:text-slate-950 underline underline-offset-8 uppercase tracking-widest">
          SIGN OUT
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
        {/* Add Form */}
        <div className="lg:col-span-1">
          <div className="bg-slate-50 p-12 rounded-[60px] sticky top-32 shadow-sm">
            <h2 className="text-3xl font-black mb-10 flex items-center gap-4 uppercase tracking-tight">
              <Plus size={32} className="text-yellow-600" /> NEW PROJECT
            </h2>
            <form onSubmit={handleAdd} className="space-y-8">
              <div className="space-y-2">
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Title</label>
                <input 
                  type="text" required 
                  className="w-full px-6 py-4 rounded-2xl border-transparent outline-none focus:ring-4 focus:ring-yellow-400 font-bold text-lg"
                  value={newItem.title} 
                  onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Category</label>
                <select 
                  className="w-full px-6 py-4 rounded-2xl border-transparent outline-none focus:ring-4 focus:ring-yellow-400 font-bold text-lg appearance-none bg-white"
                  value={newItem.category} 
                  onChange={(e) => setNewItem({...newItem, category: e.target.value as ServiceType})}
                >
                  <option value="LOGO">로고 디자인</option>
                  <option value="SNS">SNS 콘텐츠</option>
                  <option value="WEB">홈페이지 / 웹</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Image URL</label>
                <input 
                  type="text" required 
                  className="w-full px-6 py-4 rounded-2xl border-transparent outline-none focus:ring-4 focus:ring-yellow-400 font-bold"
                  value={newItem.imageUrl} 
                  onChange={(e) => setNewItem({...newItem, imageUrl: e.target.value})}
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Client</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-2xl border-transparent outline-none focus:ring-4 focus:ring-yellow-400 font-bold"
                  value={newItem.client} 
                  onChange={(e) => setNewItem({...newItem, client: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest">Description</label>
                <textarea 
                  rows={4} required 
                  className="w-full px-6 py-4 rounded-2xl border-transparent outline-none focus:ring-4 focus:ring-yellow-400 font-medium"
                  value={newItem.description} 
                  onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                ></textarea>
              </div>
              <button className="w-full bg-yellow-400 text-slate-950 py-6 rounded-2xl font-black text-xl hover:bg-slate-950 hover:text-white transition-all mt-4 uppercase tracking-widest">
                CREATE PROJECT
              </button>
            </form>
          </div>
        </div>

        {/* List */}
        <div className="lg:col-span-2">
          <div className="space-y-10">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-tight">MANAGE LIST ({portfolio.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolio.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-4xl border border-slate-100 flex gap-8 group hover:shadow-2xl transition-all">
                  <div className="w-32 h-32 rounded-[30px] overflow-hidden flex-shrink-0 bg-slate-100 shadow-sm border border-slate-100">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col justify-center overflow-hidden">
                    <p className="text-xs font-black text-yellow-600 uppercase mb-2 tracking-widest">{item.category}</p>
                    <h3 className="font-black text-slate-900 text-2xl mb-2 truncate uppercase tracking-tighter">{item.title}</h3>
                    <p className="text-base text-slate-400 font-bold truncate">{item.client || 'General Client'}</p>
                  </div>
                  <button 
                    onClick={() => onDelete(item.id)}
                    className="self-center p-4 text-slate-200 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={28} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
