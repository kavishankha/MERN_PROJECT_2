import React, {useEffect} from 'react';
import {Container, Grid, Grow} from '@mui/material';
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import {useDispatch} from "react-redux";
import {getPosts} from './actions/posts';


import {styled} from '@mui/system';

const StyledAppBar = styled('div')({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
});

  const StyledHeading = styled('h1')({
    color: 'rgba(0, 183, 255, 1)',
});

 const StyledImage = styled('img')({
    marginLeft: '15px',
});



const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]); // Include 'dispatch' in the dependency array

    return (
        <Container maxWidth="lg">
            <StyledAppBar>
                <StyledHeading>Memories</StyledHeading>
                <StyledImage src={memories} alt="memories" height="100"/>
            </StyledAppBar>
            <Grow in>
                <Container>
                    <Grid  container justify="space-between" alignItems="stretch" spacing={2}>
                        <Grid rowSpacing={1} item xs={10} sm={8}>
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
};

export default App;
