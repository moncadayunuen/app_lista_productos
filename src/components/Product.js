import React from 'react';

const Product = ({product, buyCar, addProduct, products}) => {
    const {name, price} = product;

    const selectProduct = id => {
        const product = products.filter(product => product.id === id)[0];
        console.log(product);
        addProduct([
            ...buyCar,
            product
        ])
    }

    //Eliminar un producto
    const deleteProduct = (id) => {
        const products = buyCar.filter(product => product.id !== id);
        //Colocar productos en el state
        addProduct(products);
    }

    return ( 
        <div>
            <h2>{name}</h2>
            <ul>
                <li>${price} MX</li>
            </ul>
            {products
            ?
                (
                    <button 
                        type="button"
                        onClick= { () => selectProduct(product.id) }
                    >Comprar</button>
                )
            :
                (
                    <button 
                        type="button"
                        onClick= { () => deleteProduct(product.id) }
                    >Eliminar</button>
                )
            }
        </div>
    );
}

export default Product;