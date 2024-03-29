import { Navigate, useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import Page404 from './pages/dashboard/Page404';
import DashboardAppPage from './pages/dashboard/DashboardAppPage';
import FormulaComparison from './pages/dashboard/FormulaComparison';
import Profile from './pages/dashboard/Profile';
import Recommendation from './pages/dashboard/Recommendation';
import MedicineDetail from './pages/dashboard/MedicineDetail';
import RecommendationDeatil from './pages/dashboard/RecommendationDeatil';

import Home from './pages/landing/Home';
import UserPage from './pages/dashboard/UserPage';
import About from './pages/landing/About';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import AuthGuard from './pages/auth/AuthGuard';
import GuestGard from './pages/auth/GuestGard';

// ----------------------------------------------------------------------

export default function Router() {
  const { isLogin } = useSelector((state) => state.authreducer);
  // const { user } = useSelector((state) => state.authreducer);
  // console.log(user, 'user');
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: (
        <AuthGuard isAuthenticated={isLogin}>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        {
          path: 'formula-comparison',
          element: <FormulaComparison />,
        },
        {
          path: 'formula-comparison/:id',
          element: <MedicineDetail />,
        },

        { path: 'price-comparison', element: <UserPage /> },
        { path: 'recommendation', element: <Recommendation /> },
        { path: 'recommendation/:id', element: <RecommendationDeatil /> },

        { path: 'profile', element: <Profile /> },
      ],
    },
    {
      path: '/login',
      element: (
        <GuestGard isAuthenticated={isLogin}>
          <Login />
        </GuestGard>
      ),
      children: [{ element: <Navigate to="/login" />, index: true }],
    },
    {
      path: 'Sign-up',
      element: <Signup />,
    },

    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: '*',
    //   element: <Navigate to="/404" replace />,
    // },
    // {
    //   path: '/404',
    //   element: <Page404 />,
    // },
  ]);

  return routes;
}
