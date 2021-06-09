import './profile.css'

import profile from '../../assets/profile.png';

import Header from '../../components/header'

function Profile({setNewName, setNewEmail}) {


  return (
    <div>
         <Header />
    <div id="profile">
    <img src={profile} alt="Profilbild"/>

<span>{setNewName}</span>
<span>{setNewEmail}</span>

    <h2 id="text-profile">Orderhistorik</h2>
    </div>
    </div>
  )
}

fetch('http://localhost:8000/api/order/johanna')
  .then(response => response.json())
  .then(data => console.log(data));

export default Profile


