import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Toolbar from './components/Toolbar';
import Home from './components/Home';
import NotFound from './components/NotFound';

import themes from './themes';
import { Global, ThemeProvider, useTheme } from '@emotion/react';
import Button from './components/Button';

const GlobalStyles = () => {
  const theme = useTheme()
  return (
    <Global styles={{
      '#root': {
        background: theme.colors.background
      }
    }} />
  )
}

function App() {
  console.log(themes)
  return (
    <ThemeProvider theme={themes[0]}>
      <GlobalStyles />

      <Router>
        <Toolbar />
        <Button >Click Me</Button>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
