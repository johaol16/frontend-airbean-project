import './History.css'

import { UserContext } from '../App.js'

import { useState, useEffect, useContext } from 'react'


function History() {
  const [posts, setPosts] = useState([])

  const username = useContext(UserContext)


  useEffect(() => {
    async function getState() {
      const response = await fetch('http://localhost:8000/api/order/' + username)
      const data = await response.json()
  console.log('getState:', data)
  setPosts(data)
     

      }
  getState()
}, [username])


  

  return (
      <ul className="order-wrap">
        {
  posts.map(post => {return (<div>
    <li className="history-list" key={post.id}>#{post.id}</li>
    <li className="history-list">{post.orderTime}</li>
    <li className="history-list">total ordersumma {post.price} kr</li>
    <hr></hr>
    </div>)}
    )}
      </ul>
  )}

export default History