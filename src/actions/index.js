// need axios to make a network request to the reduxblog API
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

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