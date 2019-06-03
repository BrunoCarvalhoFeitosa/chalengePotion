import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';

import Footer from './Footer';
import { storeProducts } from '../data';
import { ProductConsumer } from './context';

export default class ProductList extends Component {
    state = {
        products: storeProducts
    };

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <Title name="Potions" title="Store" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} handleDetail={value} />;
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </React.Fragment>
            //<Product />
        )
    }
}