import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Iconify from '../../components/iconify';
import InputField from '../../components/Input/InputField';
import logoImage from "../../assets/Images/logo-01.png"
import "./style.css"




// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{''}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }



export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);

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
            <Typography variant='h1' sx={{ color: "#424242" }}  >Login</Typography>
            <Typography variant='body2' sx={{ color: "#A1A1A1", mt: 2 }} >Log in to your account to continue</Typography>
          </Box>
          {/* Form */}
          <Box component="form" sx={{ mt: 1 }}>

            <InputField
              margin="normal"
              label="Email address"
              name="name"
              id="email"
              type="email"
            />

            <InputField
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
            />

            <Box sx={{ textAlign: "end", mt: 1 }} >
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Box sx={{ textAlign: "center" }} >
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Box>

          </Box>
          {/* <Copyright sx={{ mt: 5 }} /> */}
        </Paper>
      </Box>
    </Container>
  );
}
