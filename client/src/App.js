import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import activities from './images/activities.png';
const App = () =>{
    return (
        <Container>
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Wall.app</Typography>
                <img src={activities} alt="Activities" height="60"/>
            </AppBar>
        </Container>
    );
}

export default App;