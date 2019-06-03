import styled from 'styled-components';

export const FooterWrapper = styled.footer `

/* Background e Altura Rodapé */
background: var(--mainPurple);
height: auto!important;

.links .nav-link {
    position: relative;
    right: 20px;
    color: var(--mainSnow);
}

/* Posição Redes Sociais Rodapé */
 ul {
    display: flex;
    list-style: none;
}

/* Espaçamento Redes Sociais Rodapé */
ul li {
    padding-left: 10px;
    margin: 5px;
    cursor: pointer;
}

/* Tamanho Imagens Redes Sociais Rodapé */
.social-icon img {
    width: 30px!important;
}

/* Tipografia Copyright Rodapé */
.copy {
    font-size: 14px;
    color: var(--mainSnow);
}

/* Tipografia Desconto Newsletter Rodapé */
.text-descount-newsletter  {
    color: var(--mainSnow);
}

`



