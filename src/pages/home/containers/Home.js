import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import { Container } from '../components/styles/Home.styles';
import Form from '../../registration/containers/Form';

export class Home extends React.Component {    
    render() {                       
      return (        
        <Container>
          <Header />
          <Body>
            <Form /> 
          </Body>
          <Footer />          
        </Container>        
      );
    }
  }

  export default Home;