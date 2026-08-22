import { cn } from '../../utils/cn';

export default function Input({
  label,
  error,
  helperText,
  className = '',
  id,
  ...props
}) {
  const inputId = id || props.name;

  return (
    <div className="w-full space-y-1 text-left">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-medium text-slate-300">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          'w-full bg-slate-900 border text-slate-100 rounded-lg px-3 py-2 text-sm transition focus:outline-none focus:ring-1',
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-slate-700 focus:border-indigo-500 focus:ring-indigo-500',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
      {!error && helperText && <p className="text-xs text-slate-400 mt-1">{helperText}</p>}
    </div>
  );
}