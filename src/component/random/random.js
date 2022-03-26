const random = (cartLength) => {
    const randomNumber = Math.floor(Math.random() * cartLength);
    return randomNumber;
}

// Random number //
const handleRandomProduct = (cart, setCart) => {
    let newCart = [];
    if (cart.length > 0) {
        const index = random(cart.length);
        if (index < cart.length) {
            newCart.push(cart[index]);
            setCart(newCart);
        } else {
            handleRandomProduct();
        }

    }
}

export {
    handleRandomProduct
}

export default random;