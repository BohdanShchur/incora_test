import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {User} from './pages/User';
import {Nav} from './components/Navigation'
import {Reducer} from './redux/reducer'
import {Post} from './pages/Post'
import {Posts} from './pages/Posts'
import { UserList } from './components/UserList'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Switch, Route, Redirect}  from 'react-router-dom'
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// import reportWebVitals from './reportWebVitals';


const store = createStore(Reducer, compose (
  applyMiddleware(
    thunk, logger
  )   
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Nav />
        <Switch>
          <Route path="/user" component= {<User />} />
          <Route exact path="/userlist" component={<UserList />} />
          <Route exact path="/posts/:userId" component={Posts} />
          <Route exact path="/post/:postId" component={Post} /> 
          <Redirect to="/user" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
