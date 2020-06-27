import React from 'react';

import { Route, Switch } from 'react-router-dom';
import TopBar from './components/Navigation/TopBar/TopBar';
import Home from './containers/Home/Home';
import Fish from './containers/Fish/Fish';
import Bugs from './containers/Bugs/Bugs';

function App() {
  return (
    <div>
      <TopBar />
      <Switch>
        <Route path='/fish' component={Fish} />
        <Route path='/bugs' component={Bugs} />
        <Route path='/' exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
