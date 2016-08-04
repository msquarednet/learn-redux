// let's go!
import React from 'react';
import {render} from 'react-dom';
//import CSS (webpack handles css, dynamically creates <link> tag)
import css from './styles/style.styl';
//import Components
//import Main from './components/Main';   //was using Main directly, now using App 
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import App from './components/App';
//import Router Deps
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
//redux actions, reducers
import {Provider} from 'react-redux'
import store, {history} from './store'

//Sentry
import Raven from 'raven-js';
import {sentry_url, logException} from './data/config';

// Raven.config(sentry_url).install();
// Raven.config(sentry_url, {
//   tags: {
//     git_commit: 'asdfasdfasdf',
//     userLevel: 'editor'
//   }
// }).install();

// console.log(window.doesntExist.nope);
//console.log(window.user.doesntExist);
//logException(new Error('download failurized!'), {email: 'aa@aa.aa'}); //use in try/catch, or a promise/catch
// Raven.captureMessage('Something bad-tastic happened. See user comments...');
// Raven.showReportDialog();



// render(<p>worky!</p>, document.getElementById('root'));
// render(<Main/>, document.getElementById('root'));

const router = (
  // <Router history={browserHistory}>
  //   <Route path="/" component={Main}>
  //     <IndexRoute component={PhotoGrid}></IndexRoute>
  //     <Route path="/view/:postId" component={Single}></Route>
  //   </Route>
  // </Router>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'));





