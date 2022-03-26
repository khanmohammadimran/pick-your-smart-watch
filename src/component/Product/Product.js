import React from 'react';

const Product = (props) => {
    console.log(props.product)
    return (
        <div>
            <h2>This is product</h2>
        </div>
    );
};

export default Product;