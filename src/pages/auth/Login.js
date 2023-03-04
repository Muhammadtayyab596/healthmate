import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import CssBaseline from '@mui/material/CssBaseline';
import { Link , useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import "./style.css"

// Firebase
// import { doc, setDoc } from "firebase/firestore";
import { authContext } from '../../context/AuthContext';
// import { db } from "../../firebase/index"



import CustomButton from '../../components/Button/CustomButton';
import logoImage from "../../assets/Images/logo-01.png"
import Iconify from '../../components/iconify';



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


export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(authContext)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setloading(true)
    setError("")
    login(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setloading(false)
        navigate("/dashboard")
      })
      .catch((error) => {
        setloading(false)
        setError(error?.message)
      })
  }

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
              mb: 2,
            }}
          >
            <Typography variant='h1' sx={{ color: "#424242" }}  >Login</Typography>
            <Typography variant='body2' sx={{ color: "#A1A1A1", mt: 2 }} >Log in to your account to continue</Typography>
          </Box>

          {error && (
            <Alert severity="error">{error}</Alert>
          )}

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>

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

            <Box sx={{ textAlign: "end", mt: 1 }} >
              <Link
                variant="body2"
                style={{ color: "#2065D1", fontSize: 15, textDecoration: "none" }}
              >
                Forgot password?
              </Link>
            </Box>

            <CustomButton
              text="Login"
              type="submit"
              fullWidth
              variant="contained"
              loading={loading}
              sx={{ mt: 3, mb: 2 }}
            />

            <Box sx={{ textAlign: "center", mt: 1 }} >
              <Link
                to="/sign-up"
                variant="body2"
                style={{ color: "#2065D1", fontSize: 15, textDecoration: "none" }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>

          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
