import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//import the root reducer
import rootReducer from './reducers/index';

//default data (?)
import comments from './data/comments';
import posts from './data/posts';

//create obj for default data
const defaultState = {
  posts,    //post:posts,
  comments  //comments: comments
};

//redux devtools...
const enhancers = compose( window.devToolsExtension ? window.devToolsExtension() : f => f );

// const store = createStore(rootReducer, defaultState);
const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

//hot-reloading...
if (module.hot) {
  module.hot.accept('./reducers/', ()=>{
    const nextRootReducer = require('./reducers/index').default;  //cant import inside of a function, so must require instead
    store.replaceReducer(nextRootReducer);
  })
}


export default store;