import { NavLink } from 'react-router-dom';
import { FileText, CheckSquare, Building2, User } from 'lucide-react';

const navItems = [
  { to: '/deals', label: '商談一覧', icon: FileText },
  { to: '/tasks', label: 'Task一覧', icon: CheckSquare },
  { to: '/companies', label: '企業一覧', icon: Building2 },
  { to: '/mypage', label: 'マイページ', icon: User },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-primary flex flex-col z-40">
      <div className="p-5 pt-6">
        <h1 className="text-white text-xl font-bold tracking-tight">SalesCore</h1>
        <p className="text-gray-400 text-xs mt-0.5">商談管理システム</p>
      </div>

      <nav className="flex-1 mt-4 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors relative ${
                isActive
                  ? 'bg-white/10 text-white before:absolute before:left-0 before:top-1 before:bottom-1 before:w-0.5 before:bg-accent before:rounded-full'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-sm font-medium">
            鈴
          </div>
          <div>
            <p className="text-white text-sm font-medium">鈴木 一郎</p>
            <p className="text-gray-400 text-xs">ITSS</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
