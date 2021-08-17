import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { BoxWrapper, Button, Container, ErrorLabel } from './styles/SignUpResponse.styles';

class SignUpSuccessfully extends React.Component {          
    
    render() {
        if(!this.props?.location?.state?.message) {
            return <Redirect to="/" />
        }
        return (
            <>          
                <Container>
                    <BoxWrapper>
                        <h1>{this.props.location.state.message}</h1>
                        <ErrorLabel>{this.props.location.state.reason}</ErrorLabel>
                        <Button to='/'>Return to Home</Button>
                    </BoxWrapper>
                </Container>      
            </>
        );
    }
};

export default withRouter(SignUpSuccessfully);