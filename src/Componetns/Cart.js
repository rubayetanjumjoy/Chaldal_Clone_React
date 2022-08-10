import React from 'react'
import { CartProvider, useCart } from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
  return (
    <div>
        <h1>Cart ({totalUniqueItems})</h1>

<ul>
  {items.map((item) => (
    <li key={item.id}>
      {item.quantity} x {item.name} &mdash;
      <button
        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
      >
        -
      </button>
      <button
        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
      >
        +
      </button>
      <button onClick={() => removeItem(item.id)}>&times;</button>
    </li>
  ))}
</ul>
    </div>
  )
}

export default Cart