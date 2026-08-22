import { cn } from '../../utils/cn';

export default function Toast({ message, variant = 'info', onClose }) {
  if (!message) return null;

  const variants = {
    info: 'bg-slate-800 border-indigo-500/50 text-indigo-300',
    success: 'bg-slate-800 border-emerald-500/50 text-emerald-300',
    error: 'bg-slate-800 border-red-500/50 text-red-300',
  };

  return (
    <div
      className={cn(
        'fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 border rounded-lg shadow-xl text-sm transition animate-bounce-in',
        variants[variant]
      )}
    >
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-100 font-bold ml-2 text-xs"
        >
          ✕
        </button>
      )}
    </div>
  );
}