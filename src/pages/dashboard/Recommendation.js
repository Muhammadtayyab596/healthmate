import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography, Button, Breadcrumbs, Link, Card, Box, Grid, Paper, CardContent } from '@mui/material'
// import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import Custumbreadcrumbs from '../../components/Breadcrumbs/Custumbreadcrumbs';
import Image from "../../assets/Images/medicine-02.png"

function Recommendation() {
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
                <Custumbreadcrumbs breadcrumbsName={"recommendation"} />

                <Paper sx={{ p: 3, mt: 3 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        <Box component="span" sx={{ color: "#322B80", fontWeight: "bold" }} m="{1}">
                                            Health
                                        </Box>
                                        <Box component="span" sx={{ color: "#528AC8", fontWeight: "bold" }} m="{1}">
                                            Mate
                                        </Box>
                                    </Typography>


                                    <Typography variant='h4'>
                                        Fever
                                    </Typography>

                                    <Typography sx={{ fontSize: 14, my: 1 }} color="text.secondary">
                                        Fever is the temporary increase in the body's temperature in response to a disease or illness.
                                    </Typography>

                                    <Typography variant='h6'>
                                        symptoms
                                    </Typography>

                                    <Typography sx={{ fontSize: 14, my: 1 }} color="text.secondary">
                                        Sweating,
                                        General weakness,
                                        Muscle aches, etc
                                    </Typography>

                                    <Button>Recommendation</Button>

                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        <Box component="span" sx={{ color: "#322B80", fontWeight: "bold" }} m="{1}">
                                            Health
                                        </Box>
                                        <Box component="span" sx={{ color: "#528AC8", fontWeight: "bold" }} m="{1}">
                                            Mate
                                        </Box>
                                    </Typography>


                                    <Typography variant='h4'>
                                        Fever
                                    </Typography>

                                    <Typography sx={{ fontSize: 14, my: 1 }} color="text.secondary">
                                        Fever is the temporary increase in the body's temperature in response to a disease or illness.
                                    </Typography>

                                    <Typography variant='h6'>
                                        symptoms
                                    </Typography>

                                    <Typography sx={{ fontSize: 14, my: 1 }} color="text.secondary">
                                        Sweating,
                                        General weakness,
                                        Muscle aches, etc
                                    </Typography>

                                    <Button>Recommendation</Button>

                                </CardContent>
                            </Card>
                        </Grid>



                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        <Box component="span" sx={{ color: "#322B80", fontWeight: "bold" }} m="{1}">
                                            Health
                                        </Box>
                                        <Box component="span" sx={{ color: "#528AC8", fontWeight: "bold" }} m="{1}">
                                            Mate
                                        </Box>
                                    </Typography>


                                    <Typography variant='h4'>
                                        Fever
                                    </Typography>

                                    <Typography sx={{ fontSize: 14, my: 1 }} color="text.secondary">
                                        Fever is the temporary increase in the body's temperature in response to a disease or illness.
                                    </Typography>

                                    <Typography variant='h6'>
                                        symptoms
                                    </Typography>

                                    <Typography sx={{ fontSize: 14, my: 1 }} color="text.secondary">
                                        Sweating,
                                        General weakness,
                                        Muscle aches, etc
                                    </Typography>

                                    <Button>Recommendation</Button>

                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        <Box component="span" sx={{ color: "#322B80", fontWeight: "bold" }} m="{1}">
                                            Health
                                        </Box>
                                        <Box component="span" sx={{ color: "#528AC8", fontWeight: "bold" }} m="{1}">
                                            Mate
                                        </Box>
                                    </Typography>


                                    <Typography variant='h4'>
                                        Fever
                                    </Typography>

                                    <Typography sx={{ fontSize: 14, my: 1 }} color="text.secondary">
                                        Fever is the temporary increase in the body's temperature in response to a disease or illness.
                                    </Typography>

                                    <Typography variant='h6'>
                                        symptoms
                                    </Typography>

                                    <Typography sx={{ fontSize: 14, my: 1 }} color="text.secondary">
                                        Sweating,
                                        General weakness,
                                        Muscle aches, etc
                                    </Typography>

                                    <Button>Recommendation</Button>

                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid >


                </Paper>





            </Container>






        </>
    )
}

export default Recommendation