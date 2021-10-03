import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from './pages/Landing'
import Post from './pages/Post'
import Firebase from './components/Firebase'

function App() {
  return (
    <Firebase>
      <Router>
        <Switch>
          <Route path="/posts/:id">
            <Post />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </Firebase>
  );
}

export default App;
