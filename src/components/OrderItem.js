function OrderItem({ order }) {

  return (
      <li>{order.orders.id}
          {order.orders.eta}
      </li>
  )
}

export default OrderItem