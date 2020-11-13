import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Toolbar from './components/Toolbar';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Toolbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
