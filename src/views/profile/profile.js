import './profile.css'
import profile from '../../assets/profile.png'

import Header from '../../components/header'
import History from '../../components/History'
import { UserContext } from '../../App.js'


import { useContext } from 'react'

function Profile() {

  const username = useContext(UserContext)


  return (
    <div>
         <Header />
    <div id="profile">
    <img src={profile} alt="Profilbild"/>

    <h3 className="profile-text">{ username }</h3>

    <h2 id="text-profile">Orderhistorik</h2>

    <History />
    </div>
    </div>
  )
}

export default Profile


