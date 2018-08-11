import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST} from "../actions";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POST:
            // ES5 way
            // // the post that we fetch is available as action.payload.data as we're using axios
            // const post = action.payload.data;
            // // unload all existing posts we have from state and put them into our new object
            // const newState = {...state,};
            // newState[post.id] = post;
            // return newState;

            //ES6 way
            // add a new key value pair to the overall state object
            // so over time fetch each additional post and add it to this existing object
            return {...state, [action.payload.data.id]: action.payload.data};


        // add a case to catch the type FETCH_POSTS and add it to our application level state
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");


        default:
            return state;
    }
};