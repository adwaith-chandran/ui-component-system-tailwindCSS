import Button from '../ui/Button';

export default function JobCard({ job }) {
  return (
    <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-3 hover:border-slate-700 transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-slate-100">{job.title}</h3>
          <p className="text-sm text-indigo-400 font-medium">{job.company}</p>
        </div>
        <span className="text-xs px-2.5 py-1 bg-slate-900 border border-slate-800 text-slate-300 rounded-full font-mono">
          {job.type}
        </span>
      </div>

      <p className="text-xs text-slate-400 line-clamp-2">{job.description}</p>

      <div className="flex justify-between items-center pt-2 border-t border-slate-900">
        <span className="text-xs text-slate-400">{job.location} • {job.salary}</span>
        <Button variant="primary" size="sm">
          Apply Now
        </Button>
      </div>
    </div>
  );
}