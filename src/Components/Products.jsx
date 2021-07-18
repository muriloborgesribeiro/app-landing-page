import React from 'react';
import ProductBox from './ProductBox';
import imgProduct1 from '../img/product1.png';
import imgProduct2 from '../img/product2.png';

function Products() {
    return (
        <div id='products'>
            <h1>OFERTAS EM DESTAQUE</h1>
            <div className='a-container'>
                <ProductBox image={imgProduct1} title="Na Brasa Burger" price="5,99"/>
                <ProductBox image={imgProduct2} title="Old Burger" price="4,99"/>
                <ProductBox image={imgProduct1} title="Kiburguer TOP" price="1,99"/>
            </div>
        </div>
    );
}

export default Products;