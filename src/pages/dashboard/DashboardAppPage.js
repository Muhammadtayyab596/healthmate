import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box, Button } from '@mui/material';
// components
import Iconify from '../../components/iconify';
import image from '../../assets/Images/medine-img.png';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const { user } = useSelector((state) => state.authreducer);
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate(`/dashboard/formula-comparison`);
  };
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Healht Mate </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome {user && user?.username}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={9}>
            <Box sx={{ background: '#D1E9FC', px: 5, py: 4, borderRadius: '16px' }}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={8} md={4} lg={8}>
                  <Typography variant="h4" color="#04297A">
                    Alternative Medicine Guide
                  </Typography>
                  <Typography sx={{ my: 2, fontWeight: 500, fontSize: '15px' }}>
                    Our website's comparison tool provides detailed information on medications, including formula, name,
                    uses, and potential side effects.
                  </Typography>
                  <Button
                    sx={{
                      background: 'linear-gradient(180deg, #528AC8 0%, #322B80 100%)',
                      fontWeight: 500,
                    }}
                    variant="contained"
                    onClick={() => handleCLick()}
                  >
                    Start now
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <img src={image} alt="medicine" />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Medicine" total={18495} color="info" icon={'mdi:medicine'} />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Disease Rates"
              subheader="Last two months"
              chartData={[
                { label: 'Ibuprofen', value: 400 },
                { label: 'Norumn', value: 430 },
                { label: 'Paracetamol', value: 448 },
                { label: 'panadol', value: 470 },
                { label: 'Softin', value: 540 },
                { label: 'Fexet', value: 580 },
                { label: 'Cebosh', value: 690 },
                { label: 'Acaabel', value: 1100 },
                { label: 'Amoxicillin', value: 1200 },
                { label: 'Paracetamol', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Medicine Used"
              chartData={[
                { label: 'Ibuprofen', value: 4344 },
                { label: 'Paracetamol', value: 5435 },
                { label: 'Atorvastatin', value: 1443 },
                { label: 'Amoxicillin', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
