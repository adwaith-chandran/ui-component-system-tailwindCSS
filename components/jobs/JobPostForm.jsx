import { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

export default function JobPostForm({ onAddJob }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.company) return;
    onAddJob({ ...formData, id: Date.now() });
    setFormData({ title: '', company: '', location: '', type: 'Full-time', salary: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
      <h2 className="text-lg font-bold text-slate-100 border-b border-slate-800 pb-2">Post a New Job</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Job Title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
        <Input label="Company Name" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} required />
        <Input label="Location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} required />
        <Input label="Salary Range" value={formData.salary} onChange={(e) => setFormData({ ...formData, salary: e.target.value })} placeholder="$100k - $120k" required />
      </div>

      <div>
        <label className="block text-xs text-slate-400 mb-1">Job Type</label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Remote">Remote</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <div>
        <label className="block text-xs text-slate-400 mb-1">Description</label>
        <textarea
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
          required
        />
      </div>

      <Button type="submit" variant="primary">Publish Job Listing</Button>
    </form>
  );
}