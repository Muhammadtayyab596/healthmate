import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DashboardLayout from './layouts/dashboard';
import Page404 from './pages/dashboard/Page404';
import DashboardAppPage from './pages/dashboard/DashboardAppPage';


import Home from './pages/landing/Home';
import About from './pages/landing/About';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import AuthGuard from './pages/auth/AuthGuard';
import GuestGard from './pages/auth/GuestGard';

// ----------------------------------------------------------------------

export default function Router() {
  const { isLogin } = useSelector((state) => state.authreducer)
  console.log(isLogin, "isLogin")
  const routes = useRoutes([
    {
      path: '/dashboard',
      element:
        <AuthGuard isAuthenticated={isLogin}>
          <DashboardLayout />
        </AuthGuard>,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
      ],
    },
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'login',
      element: <GuestGard isAuthenticated={isLogin}>
        <Login />,
      </GuestGard>
    },
    {
      path: 'Sign-up',
      element: <Signup />,
    },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    },
    {
      path: '/404',
      element: <Page404 />
    },
  ]);

  return routes;
}
