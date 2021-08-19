import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { BoxWrapper, Button, Container, ErrorLabel } from './styles/SignUpResponse.styles';

const SignUpSuccessfully = props => {              
  if(!props?.location?.state?.message) {
    return <Redirect to="/" />
  }
    
  return (
    <>          
      <Container>
        <BoxWrapper>
          <h1>{props.location.state.message}</h1>
          <ErrorLabel>{props.location.state.reason}</ErrorLabel>
          <Button to='/'>Return to Home</Button>
        </BoxWrapper>
      </Container>      
    </>
  );
    
};

export default withRouter(SignUpSuccessfully);