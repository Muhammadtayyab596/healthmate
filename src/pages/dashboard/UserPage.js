import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
// @mui
import { Card, Stack, Button, Container, Typography, Box, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// components
import Iconify from '../../components/iconify/Iconify';
import DataGridDemo from '../../components/DataGrid/DataGrid';
import Custumbreadcrumbs from '../../components/Breadcrumbs/Custumbreadcrumbs';
import SearchInput from '../../components/Input/SearchInput';

export default function UserPage() {
  const [searchData, setSearchData] = useState('');
  const [loading, setLoading] = useState(false);
  const [medicineData, setmedicineData] = useState([]);
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

  const renderValue = (value) => {
    return value !== null && value !== undefined ? value : 'N/A';
  };

  const handleChangeInput = (e) => {
    setSearchData(e.target.value);
    getMedicineData();
  };

  const columns = [
    { field: '_id', headerName: 'S NO', width: 120 },
    { field: 'ShortName', headerName: 'Short Name', width: 100 },
    { field: 'Brand', headerName: 'Brand', width: 110 },
    {
      field: 'PricePerTab',
      headerName: 'Price Per Tablet',
      width: 170,
      valueGetter: (params) => (params.row.PricePerTab ? params.row.PricePerTab : 'N/A'),
    },
    { field: 'Packsize', headerName: 'Pack Size', width: 200 },
    { field: 'Price', headerName: 'Pack Price', width: 150 },
  ];

  useEffect(() => {
    if (searchData !== '') {
      getMedicineData();
    }
  }, [searchData]);

  return (
    <>
      <Helmet>
        <title> Price Variation | HealthMate </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h3" gutterBottom>
            Price Variation
          </Typography>
        </Stack>
        <Custumbreadcrumbs breadcrumbsName={'Price'} />
        <Card
          sx={{
            p: 4,
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
          {medicineData && searchData && !error && <DataGridDemo rows={medicineData} columns={columns} />}
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
              <Typography variant="p">See your medicines Price here</Typography>
            </Box>
          )}
        </Card>
      </Container>
    </>
  );
}
