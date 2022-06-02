import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import { Link, useNavigate, } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Services';
import User from '../../models/User';
import AuthenticationDTO from '../../models/AuthenticationDTO';
import './Login.css';

function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    /* Initialize the user state with default values.
     'userAuthentication' used to access state function.
     'setAuthenticationLogin' used to update state function.' */
    const [userAuthentication, setAuthenticationLogin] = useState<AuthenticationDTO>(
        {
            email: '',
            password: '',
        })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setAuthenticationLogin({
            ...userAuthentication,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home');
        }
    }, [token, navigate]);

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/api/Authentication/authenticate`, userAuthentication, setToken);

            alert("User logged in successfully!");
        } catch(error) {

            alert("Loggin error! User data wrong!");
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texts1'> Enter </Typography>
                        <TextField value={userAuthentication.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='Email' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField value={userAuthentication.password} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='password' label='Password' variant='outlined' name='password' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'> Login </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'> Don't have an account yet? </Typography>
                        </Box>
                        <Link to='/registeruser'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='texts1'> Sign-up </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='image'>

            </Grid>
        </Grid>
    );
}

export default Login;