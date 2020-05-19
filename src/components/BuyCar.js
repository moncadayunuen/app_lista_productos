import React from 'react';
import '../styles/BuyCar.css';
import Product from './Product';

const BuyCar = ({title, buyCar, addProduct}) => (
    <div className="buycar">
        <h2>{title}</h2>
        {buyCar.length === 0
        ?
            <p>No hay elementos en el carro de compras</p>
        : buyCar.map(product => (
            <Product
                key = {product.id}
                product = {product}
                buyCar = {buyCar}
                addProduct = {addProduct}
            />
        ))}
    </div>
);
 
export default BuyCar;