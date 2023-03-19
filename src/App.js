import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import { getProfileData } from './services/authServices';



// ----------------------------------------------------------------------

export default function App() {
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // setTimeout(() => setloading(false), 2000)
    setloading(true)
    const userId = localStorage.getItem("userUid")
    const accessToken = localStorage.getItem("accessToken")
    console.log(accessToken)
    if (accessToken) {
      getProfileData(userId)
        .then((res) => {
          const userData = res.data()
          setloading(false)
          dispatch({
            type: "LOGIN_USER",
            payload: userData,
          })
        })
        .catch((error) => {
          setloading(false)
          console.log(error)
        })
    }else{
      setloading(false)
    }

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
