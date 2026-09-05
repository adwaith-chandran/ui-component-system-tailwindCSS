import { useAuth } from '../../context/AuthContext';

export default function DashboardOverview() {
  const { user } = useAuth();
  const isEmployer = user?.role === 'employer';

  const candidateStats = [
    { label: 'Applications Submitted', value: '12' },
    { label: 'Interviews Scheduled', value: '3' },
    { label: 'Saved Jobs', value: '8' },
  ];

  const employerStats = [
    { label: 'Active Job Listings', value: '4' },
    { label: 'Total Applicants Received', value: '86' },
    { label: 'Pending Reviews', value: '14' },
  ];

  const stats = isEmployer ? employerStats : candidateStats;

  return (
    <div className="space-y-6 text-slate-100">
      <div>
        <h1 className="text-2xl font-bold">
          {isEmployer ? 'Employer Dashboard' : 'Candidate Dashboard'}
        </h1>
        <p className="text-slate-400 text-sm">
          {isEmployer
            ? 'Manage recruitment and review candidates.'
            : 'Track active applications and explore new opportunities.'}
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-1"
          >
            <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
            <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Placeholder Data */}
      <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
        <h2 className="text-lg font-semibold">
          {isEmployer ? 'Recent Job Postings' : 'Recent Activity'}
        </h2>
        <div className="border border-slate-800 rounded-lg p-4 text-sm text-slate-400 bg-slate-900/50">
          {isEmployer
            ? 'Senior React Developer • 24 Applicants • Posted 3 days ago'
            : 'Frontend Engineer at Acme Corp • Under Review • Applied yesterday'}
        </div>
      </div>
    </div>
  );
}