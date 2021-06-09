import './orderstatus.css'

import drone from'../../assets/drone.png'

import { useHistory } from 'react-router-dom'

function Orderstatus() {

  const history = useHistory()

function handleOk() {
  history.push("/profile")
}

  return (
    <div>
    <div id="orderstatus">
    <img src={drone} alt="Drönare med kaffemugg"/>
    <h2 id="title-orderstatus">Din beställning är påväg!</h2>
    <button id="ok" type="button" onClick={ handleOk }>Ok, cool!</button>
    </div>
    </div>
  )
}

export default Orderstatus