import './header.css'
// import Nav from '../views/nav/nav.js'

import header from'../assets/header.png'
import navicon from'../assets/navicon.png'

// import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function Header() {


  const history = useHistory()


  function displayNav() {
    history.push("/nav")
    

  }


  return (
    <div id="header">
      
    <img id="navicon" src={ navicon } alt="hamburgermeny"  role="button" onClick={displayNav}/>

    <img src={ header } alt="löv i olika färger"/>
    </div>

  )

}


export default Header


