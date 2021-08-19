import React from 'react';
import { CheckContainer, CheckSvg } from 'pages/utils/components/styles/CustomCheck.styles';
 
const CustomCheck = ({ onChange, value }) => (
  <CheckContainer onClick={onChange} isActive={value}>
    {
      value
      ? <CheckSvg />
      : <></>
    }
  </CheckContainer>
);

export default React.memo(CustomCheck);