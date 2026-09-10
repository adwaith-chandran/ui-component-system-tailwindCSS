// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import Layout from './components/Layout';
// import ProtectedRoute from './components/ProtectedRoute';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import UiDemo from './pages/UiDemo';

// export default function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="login" element={<Login />} />
//             <Route path="register" element={<Register />} />
//             <Route path="/ui-demo" element={<UiDemo />} />
//             <Route
//               path="dashboard"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }


// ================================================================day17====================================================================


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// Public Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UiDemo from './pages/UiDemo';

// Dashboard Layout & Child Pages
import DashboardLayout from './layouts/DashboardLayout';
import DashboardOverview from './pages/Dashboard/DashboardOverview';
import JobModule from './pages/Dashboard/JobModule';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Main App Public Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="ui-demo" element={<UiDemo />} />
          </Route>

          {/* Protected Dashboard Section with Nested Sidebar/Topbar Layout */}
          <Route
            path="/dashboard"
            element={
            <ProtectedRoute>
            <DashboardLayout />
            </ProtectedRoute>
          }
>
          <Route index element={<DashboardOverview />} />
          <Route path="jobs" element={<JobModule />} />
          <Route path="post-job" element={<JobModule />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardOverview />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}