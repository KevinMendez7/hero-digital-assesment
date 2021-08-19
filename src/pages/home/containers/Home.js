import React from 'react';
import Header from 'pages/home/components/Header';
import Footer from 'pages/home/components/Footer';
import Body from 'pages/home/components/Body';
import { Container } from 'pages/home/components/styles/Home.styles';
import Form from 'pages/registration/containers/Form';

export const Home = _ => {                       
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
  
export default Home;