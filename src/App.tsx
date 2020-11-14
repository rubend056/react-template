import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.scss';

import Toolbar from './components/Toolbar';
import Home from './components/Home';
import NotFound from './components/NotFound';

import themes from './themes';

function App() {
	
	return (
		<Router>
			<Toolbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
