// import { useAuth } from '../context/AuthContext';

// export default function Dashboard() {
//   const { logout } = useAuth();

//   return (
//     <div className="bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 max-w-2xl mx-auto space-y-4">
//       <div className="flex justify-between items-center border-b border-slate-700/60 pb-4">
//         <div>
//           <h1 className="text-2xl font-bold text-white">Dashboard</h1>
//           <p className="text-slate-400 text-sm mt-1">Welcome back to your account!</p>
//         </div>
//         <button
//           onClick={logout}
//           className="bg-red-600/80 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition"
//         >
//           Sign Out
//         </button>
//       </div>

//       <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
//         <p className="text-sm text-indigo-300">
//           🔒 You are viewing a protected private route.
//         </p>
//       </div>
//     </div>
//   );
// }


// ==============================================================================================================================


import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

export default function Dashboard() {
  const { user, token, logout } = useAuth();

  return (
    <div className="max-w-4xl mx-auto space-y-6 text-slate-100">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold">User Dashboard</h1>
          <p className="text-slate-400 text-sm">Protected user session active.</p>
        </div>
        <Button variant="danger" size="sm" onClick={logout}>
          End Session (Logout)
        </Button>
      </div>
                                                                                      
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold text-indigo-400">Session Profile Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-xs">Logged In As:</span>
            <span className="font-mono text-slate-200">{user?.email}</span>
          </div>
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
            <span className="text-slate-400 block text-xs">User Identifier:</span>
            <span className="font-mono text-slate-200">ID-{user?.id}</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-2">
        <h2 className="text-sm font-semibold text-slate-300">Active Bearer Token</h2>
        <pre className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono text-indigo-300 overflow-x-auto">
          {token}
        </pre>
      </div>
    </div>
  );
}