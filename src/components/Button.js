import styled from 'styled-components';

export const ButtonCart = styled.button `
    margin: 10px 0px;
    background: transparent;
    border: none;
        &:focus {
            outline: none;
        }
}
`

export const ButtonContainer = styled.button `
    padding: 8px;
    background: var(--mainSnow);
    border: 1px solid var(--mainDark);
    border-radius: 4px;
    color: var(--mainDark);

    &:hover {
        background: var(--mainDark);
        color: var(--mainSnow);
    }
`
