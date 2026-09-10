import { useAuth } from '../../context/AuthContext';
import JobModule from './JobModule';

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
    <div className="space-y-8 text-slate-100">
      {/* Header Section */}
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

      {/* Day 18 Job Module (Post Form for Employers / Filter & Cards for Candidates) */}
      <div className="space-y-4 pt-2">
        <h2 className="text-xl font-bold text-slate-100">
          {isEmployer ? 'Job Management' : 'Explore Available Jobs'}
        </h2>
        <JobModule />
      </div>
    </div>
  );
}