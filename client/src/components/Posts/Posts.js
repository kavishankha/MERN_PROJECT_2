import React from 'react';
import Post from "./Post/Post";
import {useSelector} from "react-redux";
import {CircularProgress, Grid} from "@mui/material";


const Posts = () => {
    const posts = useSelector((state) => state.posts);
    return (


        !posts.length ? <CircularProgress/> : (
            <Grid container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={4} md={4}>
                        <Post post={post}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Posts;