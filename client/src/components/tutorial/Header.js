import React from 'react';
import styled from '@emotion/styled';

const MainContainer = styled.header`
    background: url('./images/header-bg.jpg') no-repeat center/cover;
    height: 25rem;

    h1 {
        transform: translate(-50%, -50%);
        color: #ffffff;
        font-weight: 900;
        position: absolute;
        top: 25%;
        left: 50%;
    }
`;

const Header = () => {
    return (
        <MainContainer>
            <h1>
                Welcome!
            </h1>
            <h2>
                Let's have some fun!
            </h2>
        </MainContainer>
    );
}

export default Header;