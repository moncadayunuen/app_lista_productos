import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import BuyCar from './components/BuyCar';

import './styles/App.css';

function App() {

  //Crear listado de productos
  const[ products, setProducts ] = useState([
    { id: 1, name: 'Camisa ReactJS', price: 50 },
    { id: 2, name: 'Camida VanillaJS', price: 55 },
    { id: 3, name: 'Camisa AngularJS', price: 66 },
    { id: 4, name: 'Camisa NodeJS', price: 70 }
  ]);
  //State para un carro de compras
  const [buyCar, addProduct ] = useState([]);

  //Obtener fecha
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <div className="d-flex">
        <Header title="Tienda Virtual" />
          <h1>Lista de productos</h1>
          {products.map(product => (
            <Product 
              key = {product.id}
              product = {product}
              products = {products}
              buyCar = {buyCar}
              addProduct = {addProduct}
            />
          ))}
        <BuyCar 
          title="Tu Carrito de Compras"
          buyCar = {buyCar}
          addProduct = {addProduct}
        />
      </div>
      <Footer fecha={date} />
    </Fragment>
  );
}

export default App;
