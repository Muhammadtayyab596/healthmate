import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Stack, Typography, Card, Grid, CardContent, Box, Divider, CircularProgress } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Custumbreadcrumbs from '../../components/Breadcrumbs/Custumbreadcrumbs';

const RecommendationDeatil = () => {
  const [loading, setLoading] = useState(false);
  const [medicineData, setMedicineData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/disease/${id}`)
      .then((response) => {
        setLoading(false);
        console.log(response?.data?.medicine, 'response?.data');
        setMedicineData(response?.data?.medicine);
      })
      .catch((error) => {
        if (error?.response?.status === 404) {
          console.log(error);
          setLoading(false);
        }
      });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>Recommended Medicine | HealthMate </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h3" gutterBottom>
            Recommended Medicine
          </Typography>
        </Stack>
        <Custumbreadcrumbs breadcrumbsName={'Recommended'} />

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
        <Grid container spacing={1} justifyContent="center">
          {medicineData.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={6}>
              <Box sx={{ padding: 2, mt: 2, height: '700px' }}>
                <Card sx={{ height: '680px' }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      <Box component="span" sx={{ color: '#322B80', fontWeight: 'bold' }} m="{1}">
                        Health
                      </Box>
                      <Box component="span" sx={{ color: '#528AC8', fontWeight: 'bold' }} m="{1}">
                        Mate
                      </Box>
                    </Typography>

                    <Box sx={{ my: 2 }}>
                      <Typography variant="h5" color="#000">
                        Name
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px' }}>
                        {item.medicineName}
                      </Typography>
                    </Box>

                    <Box sx={{ my: 2 }}>
                      <Typography variant="h5" color="#000">
                        Medicine Detail
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', mt: 1 }}>
                        {item.medicineDetail}
                      </Typography>
                    </Box>

                    <Box sx={{ my: 2 }}>
                      <Typography variant="h5" color="#000">
                        Uses
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', mt: 1 }}>
                        {item.uses}
                      </Typography>
                    </Box>

                    <Box sx={{ my: 2 }}>
                      <Typography variant="h5" color="#000">
                        Side Effects
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', mt: 1 }}>
                        {item.SideEffects}
                      </Typography>
                    </Box>
                    <Divider />

                    <Stack direction="row" alignItems="center" sx={{ mt: 2, gap: '15px' }}>
                      <ReportProblemIcon sx={{ color: 'red' }} />
                      <Typography
                        sx={{
                          lineHeight: 1.4,
                          color: 'red',
                          fontSize: '15px',
                          fontWeight: 'bold',
                          letterSpacing: '1px',
                        }}
                      >
                        Please remember that all medications require consultation with a healthcare professional before
                        use.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default RecommendationDeatil;
