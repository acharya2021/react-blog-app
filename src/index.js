import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// the BrowserRouter object interacts with the history library
// and decides what to do based on a change inside the url
// the Route object provides configuration to react-router
// in order to show a component based on the url
import {BrowserRouter, Route} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            {/*if the user goes to this route(path),I will show this component*/}
            <div>
                <Route path="/" component={PostsIndex}/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
