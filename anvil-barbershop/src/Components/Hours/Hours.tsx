import React from 'react';
import { Grid, Paper, Box, Container } from '@mui/material';

const HoursPage: React.FC = () => {
    const Sunday = ['Sunday', 'Closed']
    const Monday = ['Monday', 'Closed']
    const Tuesday = ['Tuesday', '10:00 - 6:00']
    const Wednesday = ['Wednesday', '10:00 - 6:00']
    const Thursday = ['Thursday', '10:00 - 6:00']
    const Friday = ['Friday', '10:00 - 6:00']
    const Saturday = ['Saturday', '10:00 - 4:00']

    const gridItemsTitle = ['Day', 'Hours']

    const gridItems = [ Sunday[0], Sunday[1], Monday[0], Monday[1], Tuesday[0], Tuesday[1], Wednesday[0], Wednesday[1], Thursday[0], Thursday[1], Friday[0], Friday[1], Saturday[0], Saturday[1]]

    return (

        <div className='text-white text-center bg-anvilBackground flex flex-col items-center min-h-[100vh]'>
            
            <h1 className='text-8xl text-[red] mt-12'>
                Hours
            </h1>
            
            <h2 className='font-barber mt-4 text-3xl'>
                Walk Ins Only
            </h2>

            <div>

            </div>

            <Container maxWidth="lg" className=''>
                <Box sx={{ flexGrow: 1, padding: 0 }} >
                    <Grid container spacing={2}>
                    {gridItemsTitle.map((item, index) => (
                        <Grid item xs={6} md={6} key={index} className='border-b-8 border-double'>
                        <Paper
                            elevation={1}
                            sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#131313',
                            color: 'white',
                            fontSize: '50px',
                            fontFamily: 'Times New Roman',
                            textAlign: 'center',
                            fontWeight: '700',

                            }}
                        >
                            {item}
                        </Paper>
                        </Grid>
                    ))}
                    </Grid>
                </Box>
            </Container>

            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1, padding: 2 }}>
                    <Grid container spacing={2} >
                    {gridItems.map((item, index) => (
                        <Grid item xs={6} md={6} key={index} className='border-b-2' >
                        <Paper
                            elevation={1}
                            sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#131313',
                            color: 'white',
                            fontSize: '30px',
                            textAlign: 'center',
                            }}
                        >
                            {item}
                        </Paper>
                        </Grid>
                    ))}
                    </Grid>
                </Box>
            </Container>

            <h1 className='text-8xl my-12'>
                Cash Only
            </h1>

        </div>

    );
};

export default HoursPage;