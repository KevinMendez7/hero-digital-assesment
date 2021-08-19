import React from 'react';
import Home from 'pages/home/containers/Home';
import NotFoundPage from 'pages/error/components/NotFoundPage';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import SignUpSuccessfully from 'pages/registration/components/SignUpResponse';
import GlobalWrapper from 'pages/home/components/GlobalWrapper';

function App() {    
    return (
      <GlobalWrapper>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />    
            <Route exact path="/registration-complete" component={SignUpSuccessfully} />
            <Route component={NotFoundPage} />
            <Redirect from="*" to={"/"} />
          </Switch>
        </Router>      
      </GlobalWrapper>
    );  
}

export default App;
