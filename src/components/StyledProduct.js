import styled from 'styled-components';

export const ProductWrapper = styled.div `
    .card {
        border-color: 1px solid #DDD;
        transiton: all 1s linear;
        height: 320px!important;
    }

    .card-footer {
        background: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }

    .card-img-top {
        transition: all 1s;
    }

    .imageProduct {
        position: relative;
        top: -10px!important;
        left: 30px!important;
        transform: translate(-50%, -50%)!important;
        width: 200px!important;
        animation: shake 1.5s infinite;
    }

    .cart-btn {
        position: absolute;
        bottom: 0px;
        right: -2px;
        padding: 0.2rem 0.4rem;
        background: var(--mainPurple);
        border: none;
        border-radius: 4px;
        font-size: 18px;
        color: var(--mainSnow);
        transform: translate(100%, 100%);
        transition: all 1s;
    }

    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }

    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }

    @media only screen and (max-width: 1024px) {
        .card-img-top img {
            width: 50px;
        }
    }
`