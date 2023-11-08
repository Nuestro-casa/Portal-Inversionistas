import { useEffect, useState } from 'react'
import { useAuth } from '../Context/authContext.jsx'

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Iduppla from '../img/Iduppla.png'
import { useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
import { constant } from 'vega';
import ReactGA from 'react-ga';


const themeCustomer = createTheme({
  status: {
    danger: '#FF111F',
  },
  palette: {
    primary: {
      main: '#0A3323',
      darker: '#C5F5CA',
    },
    neutral: {
      main: '#6C9FFF',
      contrastText: '#fff',
    },
  },
});

export default function SignIn() {
  
  useEffect(() => {
    // Envía un evento cuando el componente Docs se monta (se renderiza).
  ReactGA.pageview(window.location.pathname);
  }, []);


  /*Datos enviados a través del servicio*/
  const [datos, setDatos] = useState({
    email: '',
    password: ''
  })

  /*Función manejo de cambios en los inputs, maneja un evento e*/
  const handleChange = ({ target: { name, value } }) => {
    setDatos({ ...datos, [name]: value })
  }

  const { login, user, loading } = useAuth();
  const correo = user ? user.email : '';
  const navigate = useNavigate('/');

  const [error, setError] = useState();
  




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(datos.email, datos.password);
      navigate('/inicio');
    } catch (error) {
      setError(error.code);

      if (error.code === 'auth/user-not-found') {
        swal({
          text: 'El usuario no se encuentra registrado',
          icon: "info",
          button: "Cerrar",
          timer: 5000,
        });
      } else if (error.code === 'auth/invalid-email') {
        swal({
          text: 'El correo es inválido',
          icon: "info",
          button: "Cerrar",
          timer: 5000,
        });
      } else if (error.code === 'auth/wrong-password') {
        swal({
          text: 'La contraseña es incorrecta, intente nuevamente',
          icon: "info",
          button: "Cerrar",
          timer: 5000,
        });
      } else {
        // Otro manejo de errores de autenticación de Firebase
        console.error('Error de autenticación:', error);
      }
    }
  };








  return (
    <ThemeProvider theme={themeCustomer}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt:2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <img src={Iduppla} alt="" style={{
              width: '292px',
              height: '267px',

            }} />
          </div>
          <Typography component="h1" variant="" sx={{
            marginTop: '14px',
            color: '#0A3323',

          }}>
            Portal Aliados
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ marginTop: '35px' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                marginTop: '40px',
                mb: 2,
                background: '#0A3323',
                borderRadius: '10px',
                color: '#FFFFFF',
              }}
              onSubmit={handleSubmit}
            >
              Iniciar sesión
            </Button>

            <Link href='/registro'>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 0, mb: 2,
                  background: '#0A3323',
                  borderRadius: '10px',
                  color: '#FFFFFF',
                  marginBottom: '80px',

                }}
              >
                Registrarse
              </Button>
            </Link>

            {/**   <Grid container>
              <Grid item xs>
                <Link to='/inicio' variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}