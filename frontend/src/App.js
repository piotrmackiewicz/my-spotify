import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from 'pages/Login'
import Me from 'pages/Me'
import Dashboard from 'pages/Dashboard'
import Playlist from 'pages/Playlist'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/me">
          <Me />
        </Route>
        <Route path="/playlist/:playlistId">
          <Playlist />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
