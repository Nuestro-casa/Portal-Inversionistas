'use client'

import { Box, Button, ButtonGroup, CardActions, CardContent, Container, CssBaseline, Grid, Rating, Stack, Tab, Typography } from '@mui/material';
/* import Dashboard from '../Components/Dashboard'; */
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
/* 
import Navbar from './../Components/Navbar'; */
/* import ResponsiveAppBar from './../Components/NabvarFixed'; */


import { useState } from 'react';



/* import PieChartsT from './../Components/PieChartsT';
import Chart from './../Components/Chart';
import PieChartT from './../Components/PieChartT';
import BarCharts from './../Components/BarCharts';
import Migasdepan from '../Components/Breadcrumbs'; */


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function Home({children}) {

  const [value, setValue] = useState('1');

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

   return (
    <ThemeProvider theme={darkTheme}>

      <Box sx={{ display: 'flex' }}>

        <Box id='contenidoInmueble'
          component="main"
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            /*  backgroundColor: '#F2F2F2', */
            height: '100vh',
          }}
        >
          {/*Nabvar fixed Mui*/}
         {/*  <ResponsiveAppBar /> */}

          {/*-----------------------------------Carta de inmueble sección A----------------------------------------------------------------------------------------- */}


          {/*----------------------------Descripción inmueble y graficas barras de progreso-------------------------------------------- */}
          <Box sx={{ flexGrow: 1, backgroundColor: '#1E1E1E' }}>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4, }}
              className=''>
              <Container maxWidth="xl" sx={{ mt: 4, }}>
                <Grid container spacing={1}>
                  {/*Segunda columna principal*/}
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    {/* card inicial apartamentos*/}
                   {/*  <Migasdepan /> */}migas de pan
                  </Grid>
                  {/*Segunda columna principal*/}
                  <Grid xs={6} sm={6} md={6} lg={6} sx={{
                    display: 'flex', justifyContent: 'end',
                    justifyItems: 'end',
                    alignItems: 'end',
                  }}>
                    <ButtonGroup
                      disableElevation
                      variant="contained"
                      aria-label="Disabled elevation buttons"
                      sx={{
                        width: 'auto',
                        height: 'auto',

                        borderRadius: '40%',
                        textTransform: 'none',
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: '#5682F2',
                          color: '#fff',

                        },
                      }}
                    >
                      <Button onClick={'/cliente'} sx={{
                        backgroundColor: '#1E1E1E',
                        height: '50px',
                        width: '100%',
                        borderRadius: '30%',
                        textTransform: 'none',
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: '#5682F2',
                          color: '#fff',

                        },
                      }}>

                        Asset</Button>

                      <Button sx={{
                        backgroundColor: 'dark',
                        height: '50px',
                        width: '100%',
                        borderRadius: '30%',
                        textTransform: 'none',
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: '#5682F2',
                          color: '#fff',

                        },
                      }}>Buyer</Button>
                    </ButtonGroup>
                    {/* <Box sx={{ width: '100%', typography: 'body1' }}>
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <TabList onChange={handleChangeTabs} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                          </TabList>
                        </Box>
                        <TabPanel value="1">Item One</TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                      </TabContext>
                    </Box> */}
                  </Grid>
                </Grid>
              </Container>
              <Typography component="h1" variant="h5" sx={{ color: '#5682F2' }}>
                Home
              </Typography>
              <Grid container sx={{
                marginTop: '10px',
              }}>
                {/*Segunda columna principal-datos del inmueble*/}
                <Grid item className='' xs={12} sm={12} md={6} lg={6}>
                  <Grid container sx={{background:'#F9F9F9', borderColor:'#CAFACA', borderRadius: '20px' }}>
                    <Grid item spacing={1} xs={12} sm={12} md={12} lg={12}
                    sx={{
                      width: '400px',
                      height: '400px',
                    }}
                      className=''>

                     {/*  <PieChartT /> */} grafica de pie

                    </Grid>
                  </Grid>
                </Grid>
                <Grid item className='' xs={12} sm={12} md={6} lg={6}>
                  <Grid container sx={{ background:'#F1F1F1', borderRadius:'20px'}}>
                    <Grid item spacing={1} xs={12} sm={12} md={12} lg={12}
                      
                       sx={{
                      width: '400px',
                      height: '400px',
                    }}>
                   {/*  <BarCharts/> */} grafica de barras

                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* prueba de colunmas */}
              <Grid container sx={{
                marginTop: '10px',
              }}>
                {/*Segunda columna principal-datos del inmueble*/}
                <Grid item className='' xs={12} sm={12} md={6} lg={6}>
                  <Grid container sx={{}}>
                    <Grid item spacing={1} xs={12} sm={12} md={12} lg={12}
                      className='border-cards-componentes centrado'>
                      <div className=''>

                        {/*----------------endpoint  graficas de barras de especificaciones------------------- */}
                        <Grid containercontainer sx={{
                          backgroundColor: '',
                          width: '100%',
                          height: '100%',
                        }}>
                          {/* <Chart /> */}Esta grafica nunca s emostro
                        </Grid>

                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item className='' xs={12} sm={12} md={6} lg={6}>
                  <Grid container sx={{}}>
                    <Grid item spacing={1} xs={12} sm={12} md={12} lg={12}
                      className='border-cards-componentes centrado'>
                      <div className=''>
igual aqui no se mostro

                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>
          {/*------------------------------------------------------------------------ */}


        </Box>
      </Box>
    </ThemeProvider >
  );
};
