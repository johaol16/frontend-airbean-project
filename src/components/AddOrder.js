import { useState } from 'react'
import { useDispatch } from 'react-redux'
import actions from '../actions/orderAction'

function AddOrder() {
    const [menu, setMenu] = useState('')
    const dispatch = useDispatch()

    function handleClick() {
      dispatch(actions.addOrder(menu))
    }

    return (
        <section className="add-menu">
            <input className="input-field" placeholder="Skriv in en menu" 
            onKeyUp={ (event) => { setMenu(event.target.value) }} />
            <button onClick={ handleClick }>Lägg till ny todo</button>
        </section>
    )
}

export default AddOrder