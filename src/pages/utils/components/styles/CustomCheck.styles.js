import styled from 'styled-components';
import { ReactComponent as Check } from '../../../../assets/check.svg';
import { specificSize } from '../../../../utils/devicesSizeValidation';

const purpleColor = 'rgb(128 48 147)';
const skyBlueColor = 'rgb(80 190 188 / 33%)';
const whiteColor = 'rgb(255 255 255)';

export const CheckContainer = styled.div`
    border: ${props => props.isActive ? purpleColor : skyBlueColor} 4px solid;
    border-radius: 8px;
    background: ${props => props.isActive ? purpleColor : whiteColor};
    width: 28px;
    height: 26px;
    box-shadow: 2px 2px 6px rgb(0 0 0 / 22%);
  
    @media only screen and ${specificSize.tablet} {
        width: 22px;
        height: 22px;
    }
  
    @media only screen and ${specificSize.mobile} {           
        width: 15px;
        height: 15px;
        border: ${props => props.isActive ? purpleColor : skyBlueColor} 3px solid;
    }     
`;

export const CheckSvg = styled(Check)`
    color: ${whiteColor};
    padding: 4px;    
  
    @media only screen and ${specificSize.mobile} {           
        padding: 1px;
    }    
`;