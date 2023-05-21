// component
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: <QueryStatsIcon />,
  },
  {
    title: 'Formula Comparison',
    path: '/dashboard/formula-comparison',
    icon: <LocalPharmacyOutlinedIcon />,
  },

  // {
  //   title: 'User',
  //   path: '/dashboard/user-page',
  //   icon: <LocalPharmacyOutlinedIcon />,
  // },  

  {
    title: 'Price Comparison',
    path: '/dashboard/price-comparison',
    icon: <PaymentsOutlinedIcon />,
  },
  {
    title: 'Recommendation',
    path: '/dashboard/recommendation',
    icon: <ManageSearchOutlinedIcon />,
  },
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: <Person2OutlinedIcon />,
  },
];

export default navConfig;
