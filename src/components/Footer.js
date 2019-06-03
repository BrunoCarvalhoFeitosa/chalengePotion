import React, { Component } from 'react';
import { FooterWrapper } from './StyledFooter';

export default class Footer extends Component {
    render() {
        return (
           //Rodapé
            <FooterWrapper className="container-fluid">
                
                {/* Rodapé - Container */}
                <div className="container">

                {/* Rodapé - Linha */}
                <div className="row">

                {/* Rodapé - Redes Sociais */}
                   <div className="col-sm">

                       {/* Links Rápidos */}
                       <ul className="links mt-2">
                           <li className="nav-link">Compania</li>
                           <li className="nav-link">Contato</li>
                           <li className="nav-link">Pedidos</li>
                       </ul>

                       {/* Rodapé - Espaçamento do topo Redes Sociais */}
                       <ul>
                           { /* Facebook */}
                           <li><img src="Images/facebook.png" className="social-icon" title="Facebook" alt="Facebook" /></li>
                           { /* Twitter */}
                           <li><img src="Images/twitter.png" className="social-icon" title="Twitter" alt="Twitter" /></li>
                           { /* Pinterest */}
                           <li><img src="Images/pinterest.png" className="social-icon" title="Pinterest" alt="Pinterest" /></li>
                           { /* Google + */}
                           <li><img src="Images/googlePlus.png" className="social-icon" title="Google +" alt="Google +" /></li>
                       </ul>

                       {/* Direitos Reservados */}
                       <p className="copy">&copy; 2019 Merlin's Potions. Todos os direitos reservados</p>
                   </div>

                   {/* Rodapé - Newsletter */}
                   <div className="col-sm">
                        <p className="text-descount-newsletter my-3">Cadastre-se na Newsletter & receba notícias e descontos</p>
  
                    {/* Rodapé - Controles Newsletter */}
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Seu melhor e-mail" aria-label="Enter your email" required />
                        <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Cadastrar</button>
                    </form>
                   </div>
                   </div>
                </div>
            </FooterWrapper>      
        );
    }
}

