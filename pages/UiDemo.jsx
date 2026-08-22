import { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Modal from '../components/ui/Modal';
import Loader from '../components/ui/Loader';
import Toast from '../components/ui/Toast';

export default function UiDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const triggerToast = (variant, message) => {
    setToast({ variant, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAsyncAction = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      triggerToast('success', 'Action completed successfully!');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 py-8 px-4 text-slate-100">
      <div>
        <h1 className="text-3xl font-bold">Component Library Showcase</h1>
        <p className="text-slate-400 text-sm mt-1">
          Standardized, props-driven UI component system[cite: 3].
        </p>
      </div>

      {/* Buttons */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold border-b border-slate-800 pb-2">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="primary" isLoading={isLoading} onClick={handleAsyncAction}>
            Simulate Async
          </Button>
        </div>
      </section>

      {/* Inputs & Select */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold border-b border-slate-800 pb-2">Form Controls</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="Standard Input" placeholder="Enter username..." />
          <Input label="Input with Error" error="Username is already taken" value="invalid_user" readOnly />
          <Select
            label="Role Select"
            options={[
              { label: 'Frontend Developer', value: 'fe' },
              { label: 'Backend Developer', value: 'be' },
              { label: 'Fullstack Developer', value: 'fs' },
            ]}
          />
        </div>
      </section>

      {/* Modal & Toast Triggers */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold border-b border-slate-800 pb-2">Feedback & Overlays</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
          <Button variant="outline" onClick={() => triggerToast('info', 'This is an info toast.')}>
            Trigger Toast
          </Button>
        </div>
      </section>

      {/* Loaders */}
      <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold border-b border-slate-800 pb-2">Loaders</h2>
        <div className="flex items-center gap-6">
          <Loader size="sm" />
          <Loader size="md" />
          <Loader size="lg" />
        </div>
      </section>

      {/* Interactive Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Demo Modal Window">
        <p>This is an accessible modal component with backdrop blur and escape key closing capabilities.</p>
        <div className="pt-4 flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
        </div>
      </Modal>

      {/* Active Toast */}
      {toast && (
        <Toast
          variant={toast.variant}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}