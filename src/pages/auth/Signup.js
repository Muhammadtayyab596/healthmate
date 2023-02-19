import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CssBaseline from '@mui/material/CssBaseline';
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Iconify from '../../components/iconify';
import CustomButton from '../../components/Button/CustomButton';
import logoImage from "../../assets/Images/logo-01.png"
import "./style.css"


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    fontSize: 16,
  },
  '& label': {
    color: '#A1A1A1',
    fontSize: 15,
  },
  '& fieldset': {
    borderRadius: '13px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
  },
});


export default function Signup() {

  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log("data", data);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          sx={{
            py: 5,
            px: 4,
            bgcolor: "#fff",
            borderRadius: 5,
          }}
        >
          {/* Logo Box */}
          <Box
            sx={{
              justifyContent: 'center',
              display: 'flex',
            }
            }>
            <img src={logoImage} alt="logo" width={240} />
          </Box>
          {/* Text */}
          <Box
            sx={{
              textAlign: "center",
              mt: 2,
            }}
          >
            <Typography variant='h1' sx={{ color: "#424242" }}  >Sign Up</Typography>
            <Typography variant='body2' sx={{ color: "#A1A1A1", mt: 2 }} >create your account to continue</Typography>
          </Box>
          {/* Form */}
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>

            <CssTextField
              {...register('username', {
                required: 'Username is required',
                pattern: {
                  value: /^(?=.*[A-Za-z])[A-Za-z\d]{4,}/,
                  message: 'Minimum four characters',
                },

                // ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$
              })}
              margin="normal"
              label="Username"
              name="username"
              fullWidth
              id="username"
              type="username"
              error={Boolean(errors?.username)}
              helperText={errors?.username?.message}
            />


            <CssTextField
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
                },
              })}
              margin="normal"
              label="Email address"
              name="email"
              fullWidth
              id="email"
              type="email"
              error={Boolean(errors?.email)}
              helperText={errors?.email?.message}
            />

            <CssTextField
              {...register('password', {
                required: 'Password is required',
              })}
              fullWidth
              margin="normal"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              error={Boolean(errors?.password)}
              helperText={errors?.password?.message}
            />

            {/* <Box sx={{ textAlign: "end", mt: 1 }} >
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box> */}

            <CustomButton
              text="Login"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            />

            <Box sx={{ textAlign: "center", mt:1 }} >
              <Link
                to="/login"
                variant="body2"
                style={{ color: "#2065D1" , fontSize:15 }}
              >
                Already have an account? Login
              </Link>
            </Box>

          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
