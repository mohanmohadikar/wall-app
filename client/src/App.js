import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import appBarImage from './Images/wall.png';
import useStyles from './styles.js';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={appBarImage} alt="wall-app" height="60" />
                <Typography className={classes.heading} variant="h2" align="center">Wall App</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container /*direction="column-reverse"*/ justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid container justify="center" item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;