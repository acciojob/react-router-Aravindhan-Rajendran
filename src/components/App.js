import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default App;
