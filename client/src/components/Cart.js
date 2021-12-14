import React from 'react';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => cart.reduce((sum, { dongia, quantity }) => sum + dongia * quantity, 0)
  
  const clearCart = () => { setCart([]) }

  const setQuantity = (product, amount) => {
    const newCart = [...cart]
    newCart.find(item => item.tenhh === product.tenhh
    ).quantity = amount
    setCart(newCart)
  }

  const removeFromCart = (productToRemove) => { setCart(cart.filter((product) => product !== productToRemove)) }

  return (
    <>
      <h1>Cart</h1>
      { cart.length > 0 && (<button onClick={clearCart}>Clear Cart</button>) }
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{ product.tenhh }</h3>
            <h4>${ product.dongia }</h4>
            <input value={ product.quantity } onChange={ e => setQuantity(product, parseInt(e.target.value))} />
            <img src={ `Img/${product.hinh}` } alt={product.name} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>

      <div>Total Cost: { getTotalSum() }<sup>đ</sup></div>
    </>
  );
}