import React, { useState } from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import FileBase from 'react-file-base64';
import {
    rootStyles,
    paperStyles,
    formStyles,
    fileInputStyles,
    buttonSubmitStyles,
} from './styles'; // Import the styles from styles.js
import styled from '@emotion/styled'; // Import styled from @emotion/styled

const StyledPaper = styled(Paper)(paperStyles);

const StyledForm = styled.form(formStyles);

const StyledFileInput = styled.div(fileInputStyles);

const StyledSubmitButton = styled(Button)(buttonSubmitStyles);

const Form = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    const handleSubmit = () => {
        // Add your submit logic here
    };

    const clear = () => {
        // Add your clear logic here
    };

    return (
        <StyledPaper css={rootStyles}>
            <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit} >
                <Typography variant="h6">Creating a memory</Typography>
                <TextField
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                {/* ... Other TextField components ... */}
                <StyledFileInput>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                    <StyledSubmitButton variant="contained" color="primary" size="large" type="submit" fullWidth>
                        Submit
                    </StyledSubmitButton>
                    <StyledSubmitButton variant="contained" color="secondary" size="large" onClick={clear} fullWidth>
                        Clear
                    </StyledSubmitButton>
                </StyledFileInput>
            </StyledForm>
        </StyledPaper>
    );
};

export default Form;
