import React from 'react';
import { Container, Grid, Grow } from '@mui/material';
import memories from './images/memories.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { StyledAppBar, StyledHeading, StyledImage } from './styles';

const App = () => {
    return (
        <Container maxWidth="lg">
            <StyledAppBar>
                <StyledHeading>Memories</StyledHeading>
                <StyledImage src={memories} alt="memories" height="60" />
            </StyledAppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
