import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, 
    NavBarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
    LogoImg
    } from './NavBarElements';
import ImageLogo from '../../images/vurten-logo.png';

const NavBar = ({toggle}) => {

    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo to="/">
                        <LogoImg to="/" src={ImageLogo} alt='ImageBackground.jpg'/>                       
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills">Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio">Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>

        </>
        
    );

};

export default NavBar;