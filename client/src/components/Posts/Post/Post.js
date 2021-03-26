import React from 'react';
import { Card, Grid, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts.js';
import dummyPerson from '../../../Images/dummyPerson.png';

import useStyles from './styles.js';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return(
        <Card className={classes.card} >
            <div className={classes.overlay} >
                <Grid container direction="row">
                    <img className={classes.profileImage} src={dummyPerson} alt="person" />
                    <div>
                        <Typography style={{color: 'black'}} variant="h6">{post.creator}</Typography>
                        <Typography style={{color: 'rgba(0,0,0,0.6)'}} variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                    </div>
                    
                </Grid>
            
            </div>      
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            
            <div className={classes.overlay2} >
                <Button style={{color: 'black'}} size="small" onClick={() => setCurrentId(post._id)} >
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details} >
                <Typography variant="body2" color="textSecondary">
                    {
                        post.tags.map((tag) => `#${tag} `)
                    }
                </Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom >{ post.title }</Typography>
            <CardContent>
                <Typography className={classes.message} variant="body2" color="textSecondary" component="p" >{ post.message }</Typography>
            </CardContent>
            <div className = {classes.seprator}></div>
            <CardActions className={classes.cardActions} >
                <Button size="small" style={{color: 'red'}} onClick={() => dispatch(likePost(post._id))} >
                    <ThumbUpAltIcon fontSize="small" /> &nbsp; <span style={{color: 'black'}}>{post.likeCount}</span>
                </Button>
                <Button size="small" style={{color: 'green'}} color="primary" onClick={() => dispatch(deletePost(post._id))} >
                    <DeleteIcon fontSize="small" />
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;