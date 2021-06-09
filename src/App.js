import './App.css'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import about from './views/about/about'
import menu from './views/menu/menu'
import profile from './views/profile/profile'
import signup from './views/signup/signup'
import orderstatus from './views/orderstatus/orderstatus'
import nav from './views/nav/nav'


function App() {

  return (
<div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" component={ signup } exact />
        <Route path="/About" component={ about } />
        <Route path="/Menu" component={ menu } />
        <Route path="/Profile" component={ profile } />
        <Route path="/Orderstatus" component={ orderstatus } />
        <Route path="/Nav" component={ nav } />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
