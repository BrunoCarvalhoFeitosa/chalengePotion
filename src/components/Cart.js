import React, { Component } from 'react';
import { ProductNotFound } from './StyledCart';

export default class Cart extends Component {
    render() {
        return(
            <ProductNotFound className="container-fluid mt-5">
                    
                    {/* Bruxa */}
                    <div class="d-flex justify-content-center">
                        <img src="Images/witcher.png" class="witcher" title="Em construção" alt="Bruxa" />
                    </div>

                    {/* Em construção */}   
                    <div class="d-flex justify-content-center">
                        <h1>Em construção</h1>
                    </div>   

            </ProductNotFound>        
        );
    }
}