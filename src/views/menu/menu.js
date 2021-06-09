import './menu.css'
import bag from'../../assets/bag.png'
import add from'../../assets/add.png'

import Header from '../../components/header'
import Footer from '../../components/footer'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Modal from "react-modal";

function Menu() {

  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory()

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function handlePay() {
    history.push("/orderstatus")
  }

  return (
    <div id="menu">
      <Header />
    <div>
      <div id="circle">
      <img id="bag" src={bag} alt="Varukorg" role= "button" onClick={toggleModal}/>

      <Modal
        appElement={document.getElementById('menu')}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="mymodal"
        overlayClassName="myoverlay"
      >
        <h2 id="title-overlay">Din beställning</h2>
        <button id="pay" onClick={handlePay}>Take my money!</button>
      </Modal>

      <div id="small-circle">
        <p id="number">0</p>
      </div>
      </div>
    <h2 id="title-menu">Meny</h2>
    <div id="menu-items">
    <img id="add" src={add} alt="Lägg till produkt"/>
    <p>Kaffe 1</p>
    <img id="add" src={add} alt="Lägg till produkt"/>
    <p>Kaffe 2</p>
    <img id="add" src={add} alt="Lägg till produkt"/>
    <p>Kaffe 3</p>
    <img id="add" src={add} alt="Lägg till produkt"/>
    <p>Kaffe 4</p>
    <img id="add" src={add} alt="Lägg till produkt"/>
    <p>Kaffe 5</p>
    <img id="add" src={add} alt="Lägg till produkt"/>
    <p>Kaffe 6</p>
    </div>
    </div>
    <Footer />
    </div>
  )
}


// fetch('http://localhost:8000/api/coffee')
//   .then(response => response.json())
//   .then(data => console.log(data));

export default Menu