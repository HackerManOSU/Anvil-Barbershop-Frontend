import React from 'react';
import { Grid, Paper, Box, Container } from '@mui/material';


const ServicesPage: React.FC = () => {

    const Haircut = ['Haircut', '$30']
    const Seniors65 = ['Seniors (65+)', '$25']
    const BeardTrim = ['Beard Trim', '$20 - $25']
    const StraightRazor = ['Straight Razor Shave', '$30']
    const HaircutShave = ['Haircut + Shave', '$55']
    const HaircutBeardTrim = ['Haircut + Beard Trim', '$50']
    const AddStraightRazor = ['Add straight razor to any service', '$10']

    const gridItems = ['Services', 'Pricing', Haircut[0], Haircut[1], Seniors65[0], Seniors65[1], BeardTrim[0], BeardTrim[1], StraightRazor[0], StraightRazor[1], HaircutShave[0], HaircutShave[1], HaircutBeardTrim[0], HaircutBeardTrim[1], AddStraightRazor[0], AddStraightRazor[1] ]

    return (

        <div className='text-white bg-black flex flex-col items-center'>
            
            <h1 className='text-8xl text-[red] mt-12'>
                Services
            </h1>
            
            <h2 className='font-barber mt-4 text-3xl'>
                CASH ONLY
            </h2>

            <Container maxWidth="lg">
                <Box sx={{ flexGrow: 1, padding: 2 }}>
                    <Grid container spacing={2}>
                    {gridItems.map((item, index) => (
                        <Grid item xs={6} md={6} key={index}>
                        <Paper
                            elevation={1}
                            sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'black',
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

        </div>

    );
};

export default ServicesPage;