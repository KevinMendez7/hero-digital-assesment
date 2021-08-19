import { BoxWrapper, Button, Container, ErrorLabel } from "pages/error/components/styles/NotFoundPage.styles";


const NotFoundPage = () => {
    return (        
        <Container>
            <BoxWrapper>
                <ErrorLabel>404 Page Not Found</ErrorLabel>            
                <Button to='/'>Go back to homepage</Button>
            </BoxWrapper>
        </Container>      
    );
};

export default NotFoundPage;