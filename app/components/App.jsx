import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Weather from './Weather';
import Detail from './Detail';

function App(props) {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={Weather} />
          <Route path="/detail/:city" component={Detail} />
          <Route render={() => <p style={{ color: '#333' }}>Not found!</p>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
