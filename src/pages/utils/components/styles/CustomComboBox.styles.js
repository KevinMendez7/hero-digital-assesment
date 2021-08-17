import styled from 'styled-components';
import { ReactComponent as ArrowImg } from '../../../../assets/text-expand-arrow.svg';
import { device, specificSize } from '../../../../utils/devicesSizeValidation';

const redColor = 'rgb(225 131 149)';
const whiteColor = 'rgb(255 255 255)';
const greenColor = 'rgb(80 190 188 / 33%)';
const softPinkColor = 'rgb(248 231 231)';

export const Span = styled.span`    
    width: 55%;
    height: 35px;
    display: inherit;    
    margin-top: 12px;
    display: inherit;        
    background: unset;
  
    @media only screen and ${specificSize.mobile} {           
        width: 70%;
    }            
`;

export const SelectedItem = styled.div`
    display: flex;
    user-select: none;    
    background: ${props => props.valid || props.valid === undefined || props.active ? whiteColor : softPinkColor};    
    font-size: 1.3em;
    text-align: center;
    border: ${props => 
        props.valid || 
        props.valid === undefined || 
        props.active 
        ? greenColor 
        : redColor} 3.5px solid;
    border-bottom: ${
        props => 
            props.active 
            ? 'none'
            : props.valid || props.valid === undefined
                ? `${greenColor} 3.5px solid`
                : `${redColor} 3.5px solid`
            };
    border-radius: ${props => props.active ? '18px': '25px'};
    border-bottom-left-radius: ${props => props.active ? '0': '25px'};
    border-bottom-right-radius: ${props => props.active ? '0': '25px'};
    box-shadow: ${props => !props.active ? `2px 2px 3px ${greenColor}`: 'none'};

    @media only screen and ${device.desktop} {
        font-size: 1.2em;    
    
    }

    @media only screen and ${specificSize.laptop} {
        font-size: 0.9em;
    
    }

    @media only screen and ${device.laptopL} {
        font-size: 1.3em;    
    
    }    
  
    @media only screen and ${specificSize.tablet} {
        padding-top: 2px;
        padding-bottom: 2px;
        font-size: 1.1em;    
    }
  
    @media only screen and ${specificSize.mobile} {   
        
        border-bottom: ${
            props => 
                props.active 
                ? 'none'
                : props.valid || props.valid === undefined
                    ? `${greenColor} 2px solid`
                    : `${redColor} 2px solid` 
                };        
        border-top-left-radius: ${ props =>  props.active ? '15px' : '25px'};
        border-top-right-radius:  ${ props =>  props.active ? '15px' : '25px'};
        padding-top: 1px;
        padding-bottom: 1px;
        font-size: 1em;        
        border: ${props => 
            props.valid || 
            props.valid === undefined || 
            props.active 
            ? greenColor
            : redColor} 2px solid;
    }        
`;

export const ComboBoxContainer = styled.div`    
    background: ${whiteColor};
    overflow-y: scroll;
    margin: 0;    
    padding: 0px;        
    border: ${greenColor} 3.5px solid;
    border-radius: 15px;
    border-top-left-radius: ${props => props.active ? '15px': '0'};
    border-top-right-radius: ${props => props.active ? '15px': '0'};
    z-index: 1000;
    position: relative;                   
    display: ${props => props.expanded ? 'block' : 'none'};
    height:80px;


    ::-webkit-scrollbar {
        width: 15px;
        background: rgb(202 215 214);
        
    }

    ::-webkit-scrollbar-track {
        background: rgb(227 227 227);
    }

    ::-webkit-scrollbar-thumb {
        background: rgb(63 135 148);
        border-radius: 10px;
    }
          
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(92 135 143);
    }
  
    @media only screen and ${specificSize.mobile} {                   
        font-size: 1em;        
        border: ${greenColor} 2px solid;
    }        

`;

export const OptionsContainer = styled.div`    
    
`;

export const ItemLabel = styled.p`
  margin: 0;
  padding: 8px;

  @media only screen and ${specificSize.mobile} {    
      font-size: 0.7em;        
      padding: 5px;      
  }        
`;

export const ItemContainer = styled.div`
    border-bottom: ${greenColor} 3.5px solid;

    :last-child {    
        padding-bottom: 8px;
        border-bottom: none;
        border-bottom-left-radius: 10px;
    }

    :hover {
        background: rgb(225 240 239);
    }
`;

export const Arrow = styled(ArrowImg)`
    position: relative;
    right: 10px;
    top: 8px;
    margin-left: 20px;
    height: 13px;
    width: 13px;

    transform: ${props => props.active ? 'rotate(90deg)' : 'none'};

    @media only screen and ${specificSize.laptopL} {
        top: 8px;
    }

    @media only screen and ${specificSize.laptop} {
        top: 4px;
    }

    @media only screen and ${specificSize.tablet} {
        top: 6px;
    }
  
    @media only screen and ${specificSize.mobile} {   
        top: 5px;
    }        
`;

export const ItemText = styled.p`
    margin: auto;
`;