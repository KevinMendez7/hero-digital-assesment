import styled from "styled-components";
import { specificSize } from '../../../../utils/devicesSizeValidation';

export const CustomHeader = styled.header`    
    margin-bottom: 20px;
    padding: 30px 15px;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    @media only screen and ${specificSize.tablet} {
        margin-bottom: 0;
        padding: 12px 15px;
    }
  
    @media only screen and ${specificSize.mobile} {                   
        margin-bottom: 0;
    }        
`;

export const Title = styled.h1`
    text-align: center;
    color: rgb(122 255 135 / 48%);
    font-weight: bolder;

    @media only screen and ${specificSize.mobile} {                   
        font-size: 1.5em;
    }    
`;

export const Paragraph = styled.p`
    text-align: center;
    font-size: 20px;
  
    @media only screen and ${specificSize.mobile} {                   
        margin: 0;
    }    
`;