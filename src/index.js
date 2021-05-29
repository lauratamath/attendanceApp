/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LogIn from './Login'
import HomePage from './Home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/hello" component={() => <h1>hola</h1>} />
      <Route path="/clasestaught" component={HomePage} />
      <Route path="/" component={LogIn} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
