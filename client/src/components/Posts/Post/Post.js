import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import {styled} from '@mui/system';

const PostCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
});

const PostCardActions = styled(CardActions)({
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
});

const PostMedia = styled(CardMedia)({
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
});

const Overlay = styled('div')({
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
});

const Overlay2 = styled('div')({
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
});

const Details = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
});


const Post = ({post}) => {


    return (
        <PostCard>
            <PostMedia image={post.selectedFile} title={post.title}/>
            <Overlay>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </Overlay>
            <Overlay2>
                <Button style={{color: 'white'}} size="small" onClick={() => {
                }}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </Overlay2>
            <Details>
                <Typography variant="body2" color="textSecondary" component="h2">
                    {post.tags.map((tag) => `#${tag} `)}
                </Typography>
            </Details>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.message}
                </Typography>
            </CardContent>
            <PostCardActions>
                <Button size="small" color="primary">
                    <ThumbUpAltIcon fontSize="small"/> Like
                </Button>
                <Button size="small" color="primary">
                    <DeleteIcon fontSize="small"/> Delete
                </Button>
            </PostCardActions>
        </PostCard>
    );
};

export default Post;
