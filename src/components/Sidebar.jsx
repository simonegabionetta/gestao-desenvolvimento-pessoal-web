import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Target,
  Briefcase,
  Users,
  BookOpen,
  Lightbulb,
  MessageSquare,
  FileText,
} from 'lucide-react';

const menuItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/goals', icon: Target, label: 'Metas' },
  { path: '/projects', icon: Briefcase, label: 'Projetos' },
  { path: '/mentorships', icon: Users, label: 'Mentorias' },
  { path: '/learning', icon: BookOpen, label: 'Aprendizados' },
  { path: '/improvements', icon: Lightbulb, label: 'Melhorias' },
  { path: '/notes', icon: MessageSquare, label: 'Anotações' },
];

export default function Sidebar({ open, onClose }) {
  const location = useLocation();

  return (
    <>
      {/* Sidebar Backdrop (Mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-jira-dark text-white transform transition-transform duration-300 z-40 lg:relative lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">DevTrack</h2>
          <p className="text-xs text-gray-400">Gestão Pessoal</p>
        </div>

        <nav className="mt-6 space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-jira-blue text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          <p className="text-xs text-gray-400 text-center">
            v1.0.0
          </p>
        </div>
      </aside>
    </>
  );
}
