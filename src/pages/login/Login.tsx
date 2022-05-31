import React from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center'
                            style={{ fontWeight: 'bold' }}>
                            Enter
                        </Typography>
                        <TextField id='user' label='User' variant='outlined' name='user' margin='normal' fullWidth />
                        <TextField id='password' label='Password' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Login
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>
                                Don't have an account yet?
                            </Typography>
                        </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>
                                    Sign-up
                            </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://educationinprogress.eu/images/social_media.png)`, 
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', 
                backgroundPosition: 'center', borderRadius: '50%'
            }}>
            </Grid>
        </Grid>
    );
}

export default Login;