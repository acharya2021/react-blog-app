// need axios to make a network request to the reduxblog API
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
// create an arbitrary api key
const API_KEY = "?key=WEBSTORM123";

// make an Action Creator
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };

}

// make a new Action Creator called createPost
export function createPost(values, callback) {
    // make a post request to our backend API
    // the second argument is the object/data that we want to send to the API
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };

}