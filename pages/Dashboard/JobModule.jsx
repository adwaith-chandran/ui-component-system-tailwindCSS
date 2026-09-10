import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import JobPostForm from '../../components/jobs/JobPostForm';
import JobCard from '../../components/jobs/JobCard';
import JobFilter from '../../components/jobs/JobFilter';

const INITIAL_JOBS = [
  { id: 1, title: 'Frontend Developer', company: 'Acme Corp', location: 'Remote', type: 'Full-time', salary: '$90k - $110k', description: 'Build responsive React applications using TypeScript and Tailwind CSS.' },
  { id: 2, title: 'Backend Engineer', company: 'TechFlow', location: 'New York, NY', type: 'Contract', salary: '$120k - $140k', description: 'Maintain Node.js microservices and MongoDB database architectures.' }
];

export default function JobModule() {
  const { user } = useAuth();
  const isEmployer = user?.role === 'employer';
  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [filters, setFilters] = useState({ search: '', type: '' });

  const handleAddJob = (newJob) => setJobs([newJob, ...jobs]);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase()) || job.company.toLowerCase().includes(filters.search.toLowerCase());
    const matchesType = filters.type ? job.type === filters.type : true;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {isEmployer ? (
        <div className="space-y-6">
          <JobPostForm onAddJob={handleAddJob} />
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-100">Posted Jobs ({jobs.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <JobFilter filters={filters} setFilters={setFilters} />
          </div>
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-lg font-bold text-slate-100">Available Jobs ({filteredJobs.length})</h2>
            <div className="grid grid-cols-1 gap-4">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}