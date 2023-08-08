import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt'
import Delete from '@mui/icons-material/Delete'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import moment from 'moment';


const Post = ({ post,}) => {


    return (
        <Card>
            <CardMedia  image={post.selectedFile}  title={post.title} />
            <div >
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div >
                <Button style={{ color: 'white' }} size="small" onClick={() =>{}}><MoreHoriz fontSize="default" /></Button>
            </div>
            <div >
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary"><ThumbUpAlt  fontSize="small" /> Like {post.likeCount} </Button>
                <Button size="small" color="primary" ><Delete fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    );
};

export default Post;