import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography, Button, Breadcrumbs, Link, Card, Box, Grid, Paper } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import Custumbreadcrumbs from '../../components/Breadcrumbs/Custumbreadcrumbs';
import SearchInput from '../../components/Input/SearchInput';
import MedicineCards from '../../components/Cards/MedicineCards';
// import Card from 'src/theme/overrides/Card';
// const Item = styled(Paper)(({ theme }) => ({
//     // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', 
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     boxShadow: '0 2px 5px 1px rgba(64,60,67,.16);'
// }));

function FormulaComparison() {
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

                <Custumbreadcrumbs breadcrumbsName={"Formula"} />
                <Paper
                    sx={{
                        padding: 3,
                        mt: 2
                    }}
                >
                    <SearchInput />
                    {/* <MedicineCards /> */}
                    <Grid container spacing={3} sx={{ mt: 1 }}>
                        <Grid item xs={4}>
                            <MedicineCards />

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <MedicineCards />

                        </Grid>



                        <Grid item xs={4}>
                            <MedicineCards />

                        </Grid>
                        <Grid item xs={4}>
                            <MedicineCards />

                        </Grid>

                    </Grid >

                </Paper>
                {/* 
                <Box>
                </Box> */}




            </Container >


        </>
    )
}

export default FormulaComparison