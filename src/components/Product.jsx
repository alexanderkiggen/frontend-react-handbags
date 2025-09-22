import React from 'react';

function Product({ label, picture, name, price }) {
    return (
        <>
            <article>
                <span>{label}</span>
                <img src={picture} alt="product-img" />
                <p>{name}</p>
                <h4>€{price},-</h4>
            </article>
        </>
    );
}

export default Product;