// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import InputField from '../components/InputField';
// import { validateLoginForm } from '../utils/validation';

// export default function Login() {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateLoginForm(formData);

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setLoading(true);
//     setTimeout(() => {
//       login();
//       setLoading(false);
//       navigate('/dashboard', { replace: true });
//     }, 1200);
//   };

//   const isFormInvalid = !formData.email || !formData.password || Object.keys(errors).some((key) => errors[key]);

//   return (
//     <div className="card">
//       <h1 className="title">Sign In</h1>
//       <p className="subtitle">Enter your credentials to access your account.</p>

//       <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//         <InputField
//           label="Email Address"
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           error={errors.email}
//           placeholder="name@example.com"
//         />

//         <InputField
//           label="Password"
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           error={errors.password}
//           placeholder="••••••••"
//         />

//         <button
//           type="submit"
//           disabled={isFormInvalid || loading}
//           className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//         >
//           {loading ? (
//             <>
//               <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//               Signing In...
//             </>
//           ) : (
//             'Sign In'
//           )}
//         </button>
//       </form>
//     </div>
//   );
// }


// ==================================================================================================================================


import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await login(email, password);
    setIsLoading(false);
    navigate(from, { replace: true });
  };

  return (
    <div className="max-w-md mx-auto my-12 bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
      <h1 className="text-xl font-bold text-center">Account Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
          Sign In
        </Button>
      </form>
    </div>
  );
}