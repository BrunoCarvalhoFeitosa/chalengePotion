import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonCart } from './Button';
import { NavWrapper } from './StyledNavbar';

export default class Navbar extends Component {
    render() {
        return (
            
            //Menú fixo
            <NavWrapper className="navbar navbar-expand-lg navbar-dark fixed-top">
                <a class="navbar-brand" href="#">Merlin's Potion</a>

                {/* Menú Hambúrguer */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menú Opções */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        {/* Poções */}
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Poções<span class="sr-only">(current)</span></Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item">Poção para amor</a>
                                <a className="dropdown-item">Poção para dinheiro</a>
                                <a className="dropdown-item">Poção para sucesso</a>
                                <a className="dropdown-item">Poção para trabalho</a>
                            </div>
                        </li>

                        {/* Ingredientes */}
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Ingredientes</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item">Água mágica</a>
                                <a className="dropdown-item">Gato preto</a>
                                <a className="dropdown-item">Perna de rã</a>
                                <a className="dropdown-item">Perna de aranha</a>
                                <a className="dropdown-item">Sal mágico</a>
                                <a className="dropdown-item">Inveja</a>
                            </div>
                        </li>

                        {/* Livros */}
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Livros</Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item">Livro de magias</a>
                                <a className="dropdown-item">Livro de ingredientes raros</a>
                                <a className="dropdown-item">Livro de encantos</a>
                            </div>
                        </li>

                        {/* Suprimentos */}
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Suprimentos</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item">Caldeirão</a>
                                <a className="dropdown-item">Colher de madeira</a>
                                <a className="dropdown-item">Lenha</a>
                                <a className="dropdown-item">Fósforo</a>
                            </div>
                        </li>

                        {/* Encantos */}
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Encantos</Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item">Encanto para paralisia</a>
                                <a className="dropdown-item">Encanto para voltar à vida</a>
                                <a className="dropdown-item">Encanto para morte</a>
                            </div>
                        </li>
                    </ul>

                    {/* Caldeirão ou Carrinho */}
                    <Link to='/cart' className="ml-auto ml-5 cart">
                        <ButtonCart>
                            <img src="images/cart.png" title="Carrinho de compras" alt="Carrinho de compras" />
                        </ButtonCart>
                    </Link>

                    {/* Quantidade Produtos Carrinho */}
                    <li className="nav-link count">Poções: 0</li>
                </div>
            </NavWrapper>
        );
    }
}




