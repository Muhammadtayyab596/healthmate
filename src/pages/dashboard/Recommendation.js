import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Helmet } from 'react-helmet-async';
import {
  Container,
  Stack,
  Typography,
  Button,
  Breadcrumbs,
  Link,
  CircularProgress,
  Card,
  Box,
  Grid,
  Paper,
  CardContent,
} from '@mui/material';
// import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import Custumbreadcrumbs from '../../components/Breadcrumbs/Custumbreadcrumbs';
import Image from '../../assets/Images/medicine-02.png';

function Recommendation() {
  const [diseaseData, setDiseaseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMedicineData = () => {
    axios
      .get(`http://localhost:5000/api/disease`)
      .then((response) => {
        setDiseaseData(response.data);
        console.log(response.data);
        setLoading(false);
        // setError(false);
      })
      .catch((error) => {
        if (error?.response?.status === 404) {
          console.log(error);
          // setError(true);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    setLoading(true);
    getMedicineData();
  }, []);

  const navigate = useNavigate();
  const getSigleData = (data) => {
    navigate(`/dashboard/recommendation/${data}`);
  };
  return (
    <>
      <Helmet>
        <title> Recommendation | HealthMate </title>
      </Helmet>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h3" gutterBottom>
            Medicine Recommendation
          </Typography>
        </Stack>
        <Custumbreadcrumbs breadcrumbsName={'recommendation'} />

        <Paper sx={{ p: 3, mt: 3 }}>
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
          <Grid container spacing={3}>
            {/* map */}

            {diseaseData.map((item) => (
              <Grid item xs={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      <Box component="span" sx={{ color: '#322B80', fontWeight: 'bold' }} m="{1}">
                        Health
                      </Box>
                      <Box component="span" sx={{ color: '#528AC8', fontWeight: 'bold' }} m="{1}">
                        Mate
                      </Box>
                    </Typography>

                    <Typography sx={{ my: 1 }} variant="h4">
                      {item.diseaseName}
                    </Typography>

                    <Typography sx={{ fontSize: 14, my: 1, height: '105px' }} color="text.secondary">
                      {item.diseaseDeatils}
                    </Typography>

                    <Typography variant="h6">symptoms</Typography>

                    <Typography sx={{ fontSize: 14, my: 1, height: '52px' }} color="text.secondary">
                      {item.symptom}
                    </Typography>

                    <Button onClick={() => getSigleData(item.id)}>Recommendation</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default Recommendation;
