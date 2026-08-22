import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 max-w-2xl mx-auto space-y-4">
      <div className="flex justify-between items-center border-b border-slate-700/60 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400 text-sm mt-1">Welcome back to your account!</p>
        </div>
        <button
          onClick={logout}
          className="bg-red-600/80 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition"
        >
          Sign Out
        </button>
      </div>

      <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
        <p className="text-sm text-indigo-300">
          🔒 You are viewing a protected private route.
        </p>
      </div>
    </div>
  );
}