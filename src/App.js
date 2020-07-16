import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import TopBar from './components/Navigation/TopBar/TopBar';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Fish from './containers/Fish/Fish';
import Bugs from './containers/Bugs/Bugs';
import SeaCreatures from './containers/SeaCreatures/SeaCreatures';

function App() {
  return (
    <div className={styles.App}>
        <TopBar />
        <Container>
          <Switch>
            <Route path='/fish' component={Fish} />
            <Route path='/bugs' component={Bugs} />
            <Route path='/sea-creatures' component={SeaCreatures} />
            <Route path='/' exact component={Home} />
          </Switch>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;
