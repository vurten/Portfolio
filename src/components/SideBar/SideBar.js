import React from 'react';
import { SideBarContainer, 
    Icon, 
    CloseIcon,
    SideBarWrapper,
    SideBarLink,
    SideBarMenu
     } from './SideBarElements';


const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                        About me
                    </SideBarLink>
                    <SideBarLink to="skills" onClick={toggle}>
                        Skills
                    </SideBarLink>
                    <SideBarLink to="Portfolio" onClick={toggle}>
                        Portfolio
                    </SideBarLink>
                    <SideBarLink to="Contact" onClick={toggle}>
                        Contact
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;