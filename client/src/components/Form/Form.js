import React, {useState} from 'react';
import {Button, Paper, TextField, Typography} from '@mui/material';
import FileBase from 'react-file-base64';
import {styled} from '@mui/system';
import { useDispatch} from 'react-redux';
import { createPost} from  '../../actions/posts'

const FormPaper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(2),
}));

const Form = () => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: '',});
    const dispatch = useDispatch();

    const clear = () => {
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    };

    return (
        <FormPaper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField style={{ margin: '5px 0'}}
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    onChange={(e) =>
                        setPostData({...postData, creator: e.target.value})
                    }
                />
                <TextField style={{ margin: '5px 0'}}
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({...postData, title: e.target.value})}
                />
                <TextField style={{ margin: '5px 0'}}
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    value={postData.message}
                    onChange={(e) =>
                        setPostData({...postData, message: e.target.value})
                    }
                />
                <TextField style={{ margin: '5px 0'}}
                    name="tags"
                    variant="outlined"
                    label="Tags (comma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) =>
                        setPostData({...postData, tags: e.target.value})
                    }
                />
                <div style={{width: '97%', margin: '5px 0'}}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64}) =>
                            setPostData({...postData, selectedFile: base64})
                        }
                    />
                </div>
                <Button style={{ margin: '5px 0'}}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </FormPaper>
    );
};

export default Form;
