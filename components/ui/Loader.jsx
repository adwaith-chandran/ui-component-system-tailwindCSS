import { cn } from '../../utils/cn';

export default function Loader({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-indigo-500/20 border-t-indigo-500',
        sizes[size],
        className
      )}
      role="status"
    />
  );
}