import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
    background: #344;
    height: 4rem;

    left: 0;
    bottom: 0;
    width: 100%;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <span style={{
                color: "#ffffff",
                top: "1.5rem",
                left: "1rem",
                postition: 'relative'
            }}>
                &copy;{new Date().getFullYear()}
                Hey it's Max.
            </span>
        </FooterContainer>
    )
}

export default Footer;