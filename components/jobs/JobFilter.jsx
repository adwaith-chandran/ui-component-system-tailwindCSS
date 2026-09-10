export default function JobFilter({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
      <h3 className="font-semibold text-slate-200">Filter Jobs</h3>
      
      {/* Search Input */}
      <div>
        <label className="block text-xs text-slate-400 mb-1">Search Keyword</label>
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Title or skill..."
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
        />
      </div>

      {/* Job Type Filter */}
      <div>
        <label className="block text-xs text-slate-400 mb-1">Job Type</label>
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
        >
          <option value="">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Remote">Remote</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
    </div>
  );
}