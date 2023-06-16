import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography, Box, Grid, Paper, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Custumbreadcrumbs from '../../components/Breadcrumbs/Custumbreadcrumbs';
import SearchInput from '../../components/Input/SearchInput';
import MedicineCards from '../../components/Cards/MedicineCards';

function FormulaComparison() {
  const [medicineData, setmedicineData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMedicineData = () => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/medicine?ShortName=${searchData}`)
      .then((response) => {
        setmedicineData(response.data);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        if (error?.response?.status === 404) {
          console.log(error);
          setError(true);
          setLoading(false);
        }
      });
  };

  console.log(error, 'error');

  useEffect(() => {
    if (searchData !== '') {
      getMedicineData();
    }
  }, [searchData]);

  const handleChangeInput = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title> Formula Comparison | HealthMate </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h3" gutterBottom>
            Formula Comparison
          </Typography>
        </Stack>
        <Custumbreadcrumbs breadcrumbsName={'Formula'} />
        <Paper
          sx={{
            padding: 3,
            mt: 2,
          }}
        >
          <SearchInput value={searchData} onChange={handleChangeInput} />
          {loading && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '50vh',
              }}
            >
              <CircularProgress />
            </Box>
          )}
          {error && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '50vh',
              }}
            >
              <Typography variant="h6">Medicine not found</Typography>
            </Box>
          )}
          <Grid container spacing={3} sx={{ mt: 1 }}>
            {medicineData &&
              searchData &&
              !error &&
              medicineData.map((item) => {
                return (
                  <Grid item xs={4}>
                    <MedicineCards item={item} />
                  </Grid>
                );
              })}
          </Grid>
        </Paper>
        {!searchData && !error && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '40vh',
              color: 'gray',
            }}
          >
            <SearchIcon />
            <Typography variant="p">Search your medicine here</Typography>
          </Box>
        )}
      </Container>
    </>
  );
}

export default FormulaComparison;
