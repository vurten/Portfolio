import React, { useState } from 'react';
import {
    HomeImg, HomeBg, HomeContainer, HomeContent, HomeH1, HomePragraph,
    HomeBtnWrapper, ArrowForward, ArrowRight, ParticlesStyleCss
    } from './HomeBackgroundElements';
import ImageBackground from '../../images/ImageBackground.jpg';
import { Button } from '../ButtonElement';
import ParticlesStyle from './ParticlesStyle';
import Typed from 'react-typed';

const HomeBackground = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <>
        <HomeContainer>
        <ParticlesStyleCss>
            <ParticlesStyle />
        </ParticlesStyleCss>
            <HomeBg>
                <HomeImg src={ImageBackground} alt='ImageBackground.jpg' />
            </HomeBg>
            <HomeContent>           
                <HomeH1>SOFTWARE DEVELOPER
                    
                </HomeH1>
                <HomePragraph>
                    <Typed strings={["Software Developement","Full Stack Web Developer",
                                "Data Structure", "Data Base", "Agile Methodology", "Architecure Development"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop/>
                </HomePragraph>
                <HomeBtnWrapper>
                    <Button to="contact" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Contact me {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
        </>
    );
};

export default HomeBackground;