import './App.css'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import MenuItem from './components/MenuItem'
import AddOrder from './components/AddOrder'

import actions from './actions/orderAction'

import about from './views/about/about'
import menuu from './views/menu/menu'
import profile from './views/profile/profile'
import signup from './views/signup/signup'
import orderstatus from './views/orderstatus/orderstatus'
import nav from './views/nav/nav'


function App() {

  const menu = useSelector((state) => { return state.menu });
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMenu() {
      const response = await fetch('http://localhost:8000/api/coffee');
      const data = await response.json();
      console.log('getMenu:', data);
      dispatch(actions.getMenu(data.menu));
    }

    getMenu();
  }, [dispatch]);


  return (
    <div className="App">
    <section>
      <article className="menu-app">
        <h1>Coffee Shop</h1>
        <ul className="menu-list">
            { menu.map((menu1) => {
                return <MenuItem task={ menu1.task } key={ menu1.id } />
            }) }
        </ul>
      </article>
      <AddOrder />
    </section>


      <BrowserRouter>
      <Switch>
        <Route path="/" component={ signup } exact />
        <Route path="/About" component={ about } />
        <Route path="/Menu" component={ menuu } />
        <Route path="/Profile" component={ profile } />
        <Route path="/Orderstatus" component={ orderstatus } />
        <Route path="/Nav" component={ nav } />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
