import React, { Component } from 'react';
import { ProductConsumer } from '../components/context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import Footer from './Footer';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {
                        id,
                        company,
                        image,
                        info,
                        ingredients,
                        price,
                        title,
                        inCart
                    } = value.detailProduct;

                    return (
                        <React.Fragment>
                            <div className="container-fluid">

                                <div className="container py-5 my-5">
                                    <div className="row">

                                        {/* Container da Imagem */}
                                        <div className="col-sm">
                                            <img src={image} className="img-fluid" alt="Poção" />
                                        </div>

                                        {/* Container de Descrição */}
                                        <div className="col-sm">

                                            {/* Nome do Produto */}
                                            <h1>Potion: {title}</h1>

                                            {/* Causas e Efeitos do Produto */}
                                            <h3 className="text-bold py-2">Causes/Effects:</h3>
                                            <p>{info}</p>

                                            {/* Ingredientes do Produto */}
                                            <h3 className="text-bold">Ingredients:</h3>
                                            <p>{ingredients}</p>

                                            {/* Fabricante do Produto */}
                                            <h3 className="text-bold">Made by:</h3>
                                            <p>{company}</p>

                                            {/* Preço do Produto */}
                                            <p className="text-success">Price: ${price}</p>

                                            {/* Botão */}
                                            <Link to='/'>
                                                <ButtonContainer>Voltar à loja</ButtonContainer>
                                            </Link>

                                            {/* Pega o ID ao clicar em comprar */}
                                            <ButtonContainer className="ml-2"

                                                disabled={inCart ? true : false} onClick={() => {
                                                    value.addToCart(id)
                                                }}
                                            >
                                                {inCart ? "inCart" : "Adicionar carrinho"}
                                            </ButtonContainer>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            { /* Rodapé */}
                            <Footer></Footer>
                        </React.Fragment>
                    );
                }}
            </ProductConsumer>
        );

    }
}