import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';


export const HomeContainer = styled.div`
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: 100vw;
    position: absolute;
    display: flex;
`;

export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const HomeImg = styled.img`
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

export const HomeContent = styled.div`
    width: 100vw;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeH1 = styled.h1`
    color: rgb(236,192,110);
    font-size: 48px;
    text-align: center;
    z-index: 2;
    

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HomePragraph = styled.p`
    margin-top: 24px;
    color: #e0daca;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    z-index: 2;
    

    @media screen and (max-diwth: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;

    }
`;

export const HomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;   
`;

export const ParticlesStyleCss = styled.div`
    position: relative;
    height: 90vh;
    width: 100vw;
    z-index: 1;

`;