import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Products({ setCart, cart }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://172.16.0.2:3001/hanghoa')
            .then(res => { setProducts(res.data) })
            .catch(err => console.log('Khong doc duoc du lieu'))
    })

    const addToCart = (product) => {
        let newCart = [...cart]
        let itemInCart = newCart.find(item => product.tenhh === item.tenhh)
        if (itemInCart) {
          itemInCart.quantity++
        } else {
          itemInCart = {
            ...product,
            quantity: 1,
          }
          newCart.push(itemInCart)
        }
        setCart(newCart)
      }

    return (
        <>
           <h1>Products</h1>
            <div className="products">
                    { products.map((product, idx) => (
                <div className="product" key={idx}>
                    <img src={`Img/${ product.hinh }`} alt={product.tenhh} /><br/>
                    <h4>{product.tenhh}</h4>
                    <h5>{product.dongia}<sup>đ</sup></h5>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
                ))}
            </div>
        </>
    )
}
