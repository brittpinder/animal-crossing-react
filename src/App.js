import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

import { Route, Switch, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/Footer';
import Home from './containers/Pages/Home/Home';
import Fish from './components/Pages/Fish/Fish';
import Bugs from './components/Pages/Bugs/Bugs';
import SeaCreatures from './components/Pages/SeaCreatures/SeaCreatures';

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
            <Redirect from='/*' to="/" />
          </Switch>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;
