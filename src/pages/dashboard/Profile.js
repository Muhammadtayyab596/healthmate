import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography, Button, Breadcrumbs, Link, Avatar, Box, Grid, Paper, OutlinedInput, InputAdornment, Toolbar } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MailLockOutlinedIcon from '@mui/icons-material/MailLockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import avatarImage from "../../assets/Images/avatar.png"



const InputSearch = styled(OutlinedInput)(({ theme }) => ({
    width: "100%",
    // transition: theme.transitions.create(['box-shadow', 'width'], {
    //     easing: theme.transitions.easing.easeInOut,
    //     duration: theme.transitions.duration.shorter,
    // }),
    // '&.Mui-focused': {
    //     width: "100%",
    //     boxShadow: theme.customShadows.z8,
    // },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
    },
}));

const Profile = () => {
    return (
        <>
            <Helmet>
                <title> Profile | HealthMate </title>
            </Helmet>

            <Container>

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h3" gutterBottom>
                        User Profile
                    </Typography>
                </Stack>

                <Box>
                    <Grid container spacing={3}>
                        <Grid item lg={9} >
                            <Paper sx={{ py: 4, bgcolor: "transparent" }} >
                                <Grid lg={12} container spacing={2} >
                                    <Grid item lg={6} sx={{mb:1}} > 
                                        <InputSearch
                                            placeholder="First Name"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                   <Person2OutlinedIcon sx={{ color: 'text.disabled'}} />
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>
                                    <Grid item lg={6} sx={{mb:1}}>
                                        <InputSearch
                                            placeholder="Last Name"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                   <Person2OutlinedIcon sx={{ color: 'text.disabled'}} />
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>
                                    <Grid item lg={6} sx={{mb:1}}>
                                        <InputSearch
                                            placeholder="Email"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <MailLockOutlinedIcon sx={{ color: 'text.disabled'}} />
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>
                                    <Grid item lg={6} sx={{mb:1}}>
                                        <InputSearch
                                            placeholder="Username"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <AccountCircleOutlinedIcon sx={{ color: 'text.disabled'}}/>
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>
                                    <Grid item lg={6} sx={{mb:1}}>
                                        <InputSearch
                                            placeholder="Phone Number"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <LocalPhoneOutlinedIcon sx={{ color: 'text.disabled'}}/>
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>
                                    <Grid item lg={6} sx={{mb:1}}>
                                        <InputSearch
                                            placeholder="Country"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <LanguageIcon sx={{ color: 'text.disabled'}} />
                                                </InputAdornment>
                                            }
                                        />
                                    </Grid>
                                </Grid>
                                <Box sx={{mt:3}}>
                                    <Button variant="contained">Save</Button>
                                    <Button sx={{ mx: 1 }} variant="contained">Update</Button>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item lg={3} >
                            <Paper sx={{ p: 2, textAlign: "center", bgcolor: "transparent" }}>
                                <img
                                    width={200}
                                    alt="Remy Sharp"
                                    src={avatarImage}
                                />
                                <Typography sx={{ mt: 2 ,  color: 'text.disabled'}} >Upload Profile Picture (Optional)</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>


            </Container>
        </>
    )
}

export default Profile