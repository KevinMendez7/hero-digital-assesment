import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { specificSize } from 'utils/devicesSizeValidation';

export const Container = styled.div`
    background: rgb(68 79 129 / 48%);
    height: 100vh;
    display: flex;
    margin: auto;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const BoxWrapper = styled.div`
    color: rgb(255,255,255);
    padding: 120px;
    background: rgb(15 14 18 / 67%);
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgb(0 0 0);

    @media only screen and ${specificSize.tablet} {
        padding: 80px;
    }
  
    @media only screen and ${specificSize.mobile} {                   
        padding: 40px;
        font-size: 0.4em;
    }        
`;

export const ErrorLabel = styled.h3`
    color: rgb(206,94,54);
`;

export const Button = styled(Link)`
    background: rgb(10,121,21);
    padding: 12px;
    border-radius: 10px;
    font-weight: 700;
    text-decoration: none;
    color: rgb(250,250,250);
    display: inline-block;
    box-shadow: 2px 2px 1px rgb(62 88 58);
    margin-top: 18px;

    @media only screen and ${specificSize.mobile} {                           
        padding: 8px;
        font-size: 1.3em;
    }        
`;