import { NavLink } from 'react-router-dom';
import { Users, Search, Building2, FileText, Briefcase, CheckSquare, Send, UserCheck, Handshake, LogOut } from 'lucide-react';

const navItems = [
  { to: null,          label: '候補者一覧',    icon: Users,      disabled: true },
  { to: null,          label: '候補者検索',    icon: Search,     disabled: true },
  { to: '/companies',  label: '企業一覧',      icon: Building2,  disabled: false },
  { to: '/deals',      label: '商談一覧',      icon: FileText,   disabled: false },
  { to: '/tasks',      label: 'Task一覧',      icon: CheckSquare, disabled: false },
  { to: '/jobs',       label: '求人一覧',      icon: Briefcase,  disabled: false },
  { to: null,          label: '求人検索',      icon: Search,     disabled: true },
  { to: null,          label: 'CV SENT一覧',   icon: Send,       disabled: true },
  { to: null,          label: '面接一覧',      icon: UserCheck,  disabled: true },
  { to: null,          label: '口頭合意一覧',  icon: Handshake,  disabled: true },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-primary flex flex-col z-40">
      <div className="p-5 pt-6">
        <h1 className="text-white text-xl font-bold tracking-tight">SalesCore</h1>
        <p className="text-gray-400 text-xs mt-0.5">商談管理システム</p>
      </div>

      <nav className="mt-2 px-3 space-y-0.5">
        {navItems.map((item, idx) => {
          if (item.disabled) {
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400"
              >
                <item.icon size={18} />
                {item.label}
              </div>
            );
          }
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                  isActive
                    ? 'bg-white/10 text-white before:absolute before:left-0 before:top-1 before:bottom-1 before:w-0.5 before:bg-accent before:rounded-full'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
        <p className="text-gray-400 text-xs leading-relaxed mt-4 px-3">
          ※プロトタイプのため<br />企業/商談/Task/求人だけ<br />動的に動きます
        </p>
      </nav>

      <div className="flex-1" />

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-sm font-medium">
            鈴
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium">鈴木 一郎</p>
            <p className="text-gray-400 text-xs">ITSS</p>
          </div>
          <LogOut size={16} className="text-gray-500" />
        </div>
      </div>
    </aside>
  );
}
