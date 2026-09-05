import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';

export default function Topbar() {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur px-6 flex items-center justify-between shrink-0">
      <div className="text-sm text-slate-400">
        Welcome back, <span className="text-slate-100 font-semibold">{user?.name || user?.email}</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono capitalize">
          {user?.role || 'candidate'}
        </span>
        <Button variant="danger" size="sm" onClick={logout}>
          Logout
        </Button>
      </div>
    </header>
  );
}