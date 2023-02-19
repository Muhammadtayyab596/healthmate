import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import Page404 from './pages/dashboard/Page404';
import DashboardAppPage from './pages/dashboard/DashboardAppPage';


import Home from './pages/landing/Home';
import About from './pages/landing/About';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" /> },
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
      element: <Login />,
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
