import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position='static'>
                <Toolbar variant='dense'>

                    <Box className='cursor' mx={1}>
                        <Typography variant='h4' color='inherit'>
                            PersonalBlog
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color='inherit'>
                                Home
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color='inherit'>
                                Posts
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color='inherit'>
                                Themes
                            </Typography>
                        </Box>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={3} className='cursor'>
                            <Typography variant="h6" color='inherit'>
                                Register Themes
                            </Typography>
                        </Box>
                    </Box>

                    <Link to='/login' className='text-decorator-none'>
                        <Box display="flex" justifyContent="start">
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color='inherit'>
                                    Logout
                                </Typography>
                            </Box>
                        </Box>
                    </Link>

                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;