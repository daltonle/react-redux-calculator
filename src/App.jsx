import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from './components/pages/main/MainPage'
import HistoryPage from './components/pages/history/HistoryPage'

import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/history" component={HistoryPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
