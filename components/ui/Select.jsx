import { cn } from '../../utils/cn';

export default function Select({
  label,
  options = [],
  error,
  className = '',
  id,
  ...props
}) {
  const selectId = id || props.name;

  return (
    <div className="w-full space-y-1 text-left">
      {label && (
        <label htmlFor={selectId} className="block text-xs font-medium text-slate-300">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={cn(
          'w-full bg-slate-900 border text-slate-100 rounded-lg px-3 py-2 text-sm transition focus:outline-none focus:ring-1 cursor-pointer',
          error
            ? 'border-red-500 focus:border-red-500'
            : 'border-slate-700 focus:border-indigo-500',
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-100">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}