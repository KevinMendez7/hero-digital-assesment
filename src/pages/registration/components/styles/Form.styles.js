import styled from 'styled-components';
import { specificSize } from 'utils/devicesSizeValidation';

const redColor = 'rgb(225 131 149)';

export const CheckLabelWrap = styled.div`
  width: 50%;
  display: inherit;
  margin-bottom: 20px;

  @media only screen and ${specificSize.mobile} {
    width: initial;
  }  
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and ${specificSize.mobile} {    
    width: initial;
  }    
`;

export const CheckLabel = styled.label`
  margin-left: 20px;
  font-weight: 500;
  margin-top: 10px;

  @media only screen and ${specificSize.mobile} {    
    font-weight: 600;
    margin-right: 10px;     
    font-size: 0.7em;
  }  
`;

export const ErrorLabel = styled.p`  
  margin: 17px 0px 10px 15px;    
  color: red;

  @media only screen and ${specificSize.mobile} {    
    margin: 0 0px 10px 15px;
    font-size: 0.9em;
  }          
`;

export const Label = styled.label`

  @media only screen and ${specificSize.mobile} {
    font-size: 0.8em;
    font-weight: bolder;
  }

`;

export const InputLabelWrap = styled.div`
  width: 50%;

  @media only screen and ${specificSize.mobile} {
    width: 100%;
    text-align: -webkit-center;    
  }
`;

export const NestedContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 4%;
  margin-bottom: 4%;

  @media only screen and ${specificSize.mobile} {    
    flex-direction: column;
  }  
`;

export const Input = styled.input`
  display: inherit;
  width: 85%;
  padding: 2% 7px;
  margin-top: 3%;
  margin-bottom: 3%;
  border: ${props => props.valid || props.valid === undefined ? 'rgb(80 190 188 / 33%)' : redColor} 3.5px solid;
  border-radius: 15px;
  box-shadow: 2px 2px 3px rgb(80 190 188 / 33%);
  background: ${props => props.valid || props.valid === undefined ? 'white' : 'rgb(248 231 231)'};  

  @media only screen and ${specificSize.mobile} {    
    border: ${props => props.valid || props.valid === undefined ? 'rgb(80 190 188 / 33%)' : redColor} 2.5px solid;
    height: 15px;
  }    
`;

export const Title = styled.h1`

  @media only screen and ${specificSize.mobile} {
    font-size: 1.4em;
  }  
`;

export const FormContainer = styled.div`
  display: block;

  @media only screen and ${specificSize.mobile} {
    margin: 10%;
  }
`;

export const Paragraph = styled.p`
  color: rgb(154 151 151);

  @media only screen and ${specificSize.mobile} {
    color: rgb(154 151 151);
    font-weight: 700;
    font-size: 0.9em;
  }  
`;

export const ButtonsContainer = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: flex-end;
  align-content: stretch;
  flex-wrap: wrap;
  align-items: baseline;

  @media only screen and ${specificSize.mobile} {    
    justify-content: space-evenly;
  }
`;


export const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 25px;
  background: rgb(128 48 147);
  color: rgb(255 255 255);
  font-size: 1.1em;
  padding: 12px 60px;
  margin-right: 50px;
  margin-bottom: 20px;
  box-shadow: 3px 2px 5px rgb(0 0 0 / 56%);

  @media only screen and ${specificSize.mobile} {    
    margin-bottom: 5px;
    padding: 8px 45px;
    font-size: 0.9em;
    font-weight: 700;
    margin-right: 0;
  }  
`;

export const ResetButton = styled.button`
  border: rgb(109 130 148 / 50%) 1px solid;
  border-radius: 25px;
  cursor: pointer;
  background: rgb(255 255 255);
  color: rgb(0 0 0);
  font-size: 0.8em;
  padding: 9px 44px;
  margin-top: 13px;
  box-shadow: 3px 2px 5px rgb(0 0 0 / 56%);

  @media only screen and ${specificSize.mobile} {    
    padding: 6px 34px;
    margin-top: 4px;
    font-size: 0.7em;
    font-weight: 600;
  }  
`;