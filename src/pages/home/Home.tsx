import React from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='box'>
                <Grid alignItems='center' item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component="h3" align="center" className='title'> Welcome! </Typography>
                        <Typography variant='h3' gutterBottom color='textPrimary' component="h5" align="center" className='title'> Describe your thoughts and opnions here! </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant='outlined' className='button'> See posts! </Button>
                    </Box>
                </Grid>
                <Grid alignItems="flex-end" item xs={6}>
                    <img src='https://i.imgur.com/H88yIo2.png' alt="" width={500} height={500} />
                </Grid>
                <Grid xs={12} className='posts'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;