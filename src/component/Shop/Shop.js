import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import '../random/random'
import { handleRandomProduct } from '../random/random'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    // Maximum 4 item Show to the Cart

    const handleAddToCart = (selectedWatch) => {
        if (cart.length >= 4) {
            alert('You can select maximum 4 items');
        } else {
            let newCart = [];
            const addedWatch = cart.find(product => product.id === selectedWatch.id);
            if (addedWatch) {
                alert("You already select this item");
            } else {
                selectedWatch.quantity = 1;
                newCart = [...cart, selectedWatch];
                setCart(newCart);
            }
        }
    }

    // Empty All Product 
    const emptyAllProduct = (setCart) => {
        setCart([])
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
                        cart.map(item => <li key={item.id}>{item.name}</li>)
                    }
                </div>
                {/* Random Product Select button   */}
                <button className='secondary-button' onClick={() => handleRandomProduct(cart, setCart)}>
                    Choose One
                    <FontAwesomeIcon className="icon btn-info" icon={faHeartbeat} />
                </button>
                <br />
                {/* Empty Product Button  */}
                <button className='secondary-button' onClick={() => emptyAllProduct(setCart)}>
                    Empty Item
                    <FontAwesomeIcon className="icon btn-info" icon={faDeleteLeft} />
                </button>
            </div>
        </div >
    );
};

export default Shop;