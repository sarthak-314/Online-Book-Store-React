import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const ProductList = props => {
    const cart = useSelector(state => state.cart)
    console.log(cart)
    return (
        <>
            {cart.map(item => 
            <Product
            title={item.title}
            condition={item.condition}
            category={item.category}
            price={item.price}
            />
            )}
        </>
    )
}

export default ProductList