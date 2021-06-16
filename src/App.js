import './App.css'

import { useState, createContext } from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import about from './views/about/about'
import menu from './views/menu/menu'
import profile from './views/profile/profile'
import {Signup} from './views/signup/Signup'
import orderstatus from './views/orderstatus/orderstatus'
import nav from './views/nav/nav'

const UserContext = createContext(undefined)


function App() {

  const [username, setUsername] = useState('')

  return (
<div className="App">
      <BrowserRouter>
      <UserContext.Provider value={ username }>
      <Switch>
         <Route path="/" component={ () => <Signup update={ setUsername } /> } exact />
        <Route path="/About" component={ about } />
        <Route path="/Menu" component={ menu } />
        <Route path="/Profile" component={ profile } />
        <Route path="/Orderstatus" component={ orderstatus } />
        <Route path="/Nav" component={ nav } />
      </Switch>
      </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export { App, UserContext, Signup }