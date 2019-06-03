import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductWrapper } from './StyledProduct';
import { ProductConsumer} from './context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const { id, title, image, price, inCart } = this.props.product;

        return (
            //Grid de Produtos
            <ProductWrapper className="col-xs-3 col-sm-6 col-md-6 col-lg-4 mx-auto my-5">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div
                            className="img-container p-5" 
                            onClick={() => 
                                value.handleDetail(id)
                            }
                            >
                                
                               <Link to='/details'>
                                   <img src={image} alt="Imagem do produto" className="card-img-top imageProduct" />
                               </Link>
                               <button 
                               className="cart-btn"
                                disabled={inCart ? true : false} 
                                onClick={() => {
                                    value.addToCart(id);
                                    }}
                                    >
                               {inCart?(<p className="text-capitalize mb-0" disabled>inCart</p>):(<a>Comprar</a>)}
                               </button>
                           </div>
                        )}
                    </ProductConsumer>
                    
                    <div className="card-footer d-flex-justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>

                        <h5 className="font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price: PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};
