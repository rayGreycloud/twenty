import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';

import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
