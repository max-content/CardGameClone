import React from 'react';
import { Link } from '@reach/router';
import styled from '@emotion/styled';
import logo from './logo.svg';

const NavbarContainer = styled.div`
    background: var(--dark-green);
    .nav-link {
        color: #ffffff !importantl
        &:hover {
            background: var(--light-green);
        }
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
                <Link to="/">
                    <img style={{ width: "50px"}} src={logo} alt="React Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" >
                                Home 
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-article">
                                Add Article
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarContainer>
    )
}

export default Navbar;