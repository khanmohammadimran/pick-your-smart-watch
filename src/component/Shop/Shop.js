import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    // 4 item add to Cart
    const handleAddToCart = (selectedWatch) => {
        if (cart.length >= 4) {
            alert('You can select maximum 4 items');
        } else {
            let newCart = [];
            const addedWatch = cart.find(product => product.id === selectedWatch.id);
            if (addedWatch) {
                alert("Same item can't be added twice");
            } else {
                selectedWatch.quantity = 1;
                newCart = [...cart, selectedWatch];
                setCart(newCart);
            }
        }
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Selected Watch</h3>
                <div>
                    {
                        cart.map(item => <h4 key={item.id}>{item.name}</h4>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;