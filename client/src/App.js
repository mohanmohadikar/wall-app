import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import activities from './images/activities.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js'


const App = () =>{
    const classes = useStyles();
    return (
        <Container>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={activities} alt="Activities" height="60"/>
                &nbsp;<Typography classname={classes.heading} variant="h2" align="center">Wall.app</Typography>

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>

            </Grow>
        </Container>
    );
}

export default App;