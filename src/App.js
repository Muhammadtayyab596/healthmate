import React, { useState ,useEffect  } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components

import "./App.css"
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';



// ----------------------------------------------------------------------

export default function App() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setloading(false), 2000)
  }, []);

  return (
    loading ? (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    ) : (
      <ThemeProvider>
        <ScrollToTop />
        <StyledChart />
        <Router />
      </ThemeProvider>
    )
  );
}
