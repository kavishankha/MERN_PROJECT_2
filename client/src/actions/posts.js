import * as api from '../api';

// Action creator using Redux Thunk
export const getPosts = () => async (dispatch) => {
    try {
        // Make the API call to fetch posts
        const { data } = await api.fetchPosts();

        // Dispatch an action with the retrieved data
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (e) {
        // Handle errors by logging the error message
        console.log(e.message);
    }
};
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
