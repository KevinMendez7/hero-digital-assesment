import styled from "styled-components";
import { specificSize } from '../../../../utils/devicesSizeValidation';

export const CustomFooter = styled.footer`    
    margin-top: 20px;
    padding: 30px 15px;    
    display: flex;
    text-align: center;
    flex-direction: column;    
    font-size: calc(10px + 2vmin);
    color: white;

    @media only screen and ${specificSize.mobile} {                   
        margin-top: unset;
        padding: 20px 15px;
    }    
`;

export const Paragraph = styled.p`
    font-size: 15px;
`;