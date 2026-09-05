    import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar() {
  const { user } = useAuth();
  const role = user?.role || 'candidate';

  const candidateLinks = [
    { label: 'Overview', path: '/dashboard' },
    { label: 'My Applications', path: '/dashboard/applications' },
    { label: 'Saved Jobs', path: '/dashboard/saved' },
    { label: 'Settings', path: '/dashboard/settings' },
  ];

  const employerLinks = [
    { label: 'Overview', path: '/dashboard' },
    { label: 'Manage Jobs', path: '/dashboard/jobs' },
    { label: 'Post a Job', path: '/dashboard/post-job' },
    { label: 'Applicants', path: '/dashboard/applicants' },
  ];

  const navItems = role === 'employer' ? employerLinks : candidateLinks;

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col shrink-0">
      <div className="p-5 border-b border-slate-800">
        <span className="text-xl font-bold text-indigo-400">DevJobs</span>
        <span className="block text-xs text-slate-400 capitalize mt-1">
          {role} Portal
        </span>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}