import Image from 'next/image'
import styles from './page.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import Iduppla from '../img/Iduppla.png'
import LogoInversionistas from '../img/logoinversionistas.svg'
import { Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import Link from 'next/link';





// TODO remove, this demo shouldn't need to reset the theme.

export default function Home() {  

 


  return (
   
   
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
         <Image src={LogoInversionistas} alt="" width={492} height={287} />
        </div>
        <Typography component="h1" variant="" sx={{
          marginTop: '14px',  
          color: '#ffffff',

        }}>
          Portal Inversionistas
        </Typography>
        <Box component="form"  noValidate sx={{ marginTop: '35px' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"         
            autoComplete="email"
            autoFocus
            sx={{
                          }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"          
            autoComplete="current-password"
            sx={{
             labelColor: '#ffffff',
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              marginTop: '40px',
              mb: 2,
              background: '#6C9FFF',
              borderRadius: '10px',
              color: '#FFFFFF',
            }}
          
          >
            Iniciar sesión
          </Button>

          <Link href='/Register'>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 0, mb: 2,
                background: '#6C9FFF',
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
 
  
  )
}
