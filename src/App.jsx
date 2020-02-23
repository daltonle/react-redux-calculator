import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from './components/pages/main/MainPage'

import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
