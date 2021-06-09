import './menu.css'
import bag from'../../assets/bag.png'
import add from'../../assets/add.png'

import Header from '../../components/header'
import Footer from '../../components/footer'

import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Modal from "react-modal";


import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import MenuItem from '../../components/MenuItem'
import AddOrder from '../../components/AddOrder'

import actions from '../../actions/orderAction'


function Menu() {

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
       
        <ul className="menu-list">
            { menu.map((menu1) => {
                return <MenuItem task={ menu1.task } key={ menu1.id } />
            }) }
        </ul>
      <AddOrder />
  

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


export default Menu