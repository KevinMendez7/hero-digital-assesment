import React from 'react';
import { withRouter } from 'react-router-dom';
import { signUp } from '../../../utils/api';
import InputSection from '../../registration/components/InputSection';
import OptionsSection from '../../registration/components/OptionsSection';
import { FormContainer, Title, Paragraph, ResetButton, ButtonsContainer, SubmitButton} from '../components/styles/Form.styles';


class Form extends React.Component {

  constructor() {
    super();

    this.initialState = {      
      firstName: '',
      validFirstname: undefined,
      lastname: '',
      validLastname: undefined,
      email: '',
      validEmail: undefined,
      organization: '',
      euResident: '',
      advances: false,
      alerts: false,
      otherCommunication: false,
      someFeatureActive: undefined,
      selectedValue: '- SELECT ONE -',
      isSelectedValue: undefined
    };
    
    this.state = {
      ...this.initialState,
      form: null
    };

    this.activeAdvances = this.activeAdvances.bind(this);
    this.activeAlerts = this.activeAlerts.bind(this);
    this.activeOtherCommunication = this.activeOtherCommunication.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastnameChange = this.onLastnameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onOrganizationChange = this.onOrganizationChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.submit = this.submit.bind(this);
    this.validate = this.validate.bind(this);
    this.validateFirstInvalidSubmit = this.validateFirstInvalidSubmit.bind(this);
    this.setSelectedValue = this.setSelectedValue.bind(this);
  }

  componentDidMount() {
    this.setState({
      form: document.getElementById('form')
    });
  }

  resetForm(_) {
    this.state.form.reset();
    this.setState({        
        ...this.initialState
    });     
  }

  setSelectedValue(e) {        
    this.setState({
      selectedValue: e.target.innerText,
      isSelectedValue: true
    });
  }

  activeAdvances(_) {
    this.setState(state => ({
      advances: !state.advances,
      someFeatureActive: `${!state.advances ? true : undefined}`
    }));
  }

  activeAlerts(_) {    
    this.setState(state => ({
      alerts: !state.alerts,
      someFeatureActive: `${state.alerts ? false : undefined}`
    }));
  }

  activeOtherCommunication(_) {
    this.setState(state => ({
      otherCommunication: !state.otherCommunication,
      someFeatureActive: `${state.otherCommunication ? false : undefined}`
    }));
  }

  onFirstNameChange(e) {
    let validFirstname = false;
    if(e.target.value.length > 0) validFirstname = true;
    this.setState({
      firstName: e.target.value,
      validFirstname
    });
  }
  
  onLastnameChange(e) {
    let validLastname = false;
    if(e.target.value.length > 0) validLastname = true;
    this.setState({
      lastname: e.target.value,
      validLastname
    });    
  }
  
  onEmailChange(e) {
    let validEmail = false;
    if(e.target.value.length > 0 && e.target.value.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")) validEmail = true;
    this.setState({
      email: e.target.value,
      validEmail
    });
  }
  
  onOrganizationChange(e) {    
    this.setState({
      organization: e.target.value
    });  
  }

  validate() {
    const { validFirstname, validLastname, validEmail, advances, alerts, otherCommunication, isSelectedValue } = this.state;        

    this.validateFirstInvalidSubmit(validFirstname, validLastname, validEmail, !(advances || alerts || otherCommunication), isSelectedValue);
    
    if(!validFirstname) return false;
    if(!validLastname) return false;
    if(!validEmail) return false;   
    if(!isSelectedValue) return false; 
    if(!(advances || alerts || otherCommunication)) {
      this.setState({        
        someFeatureActive: false
      });
      return false
    };
    return true;
  }

  validateFirstInvalidSubmit(validFirstname, validLastname, validEmail, activeFeatures, isSelectedValue) {
    if(validFirstname === undefined) {
      this.setState({
        validFirstname: false
      });
    };

    if(validLastname === undefined) {
      this.setState({
        validLastname: false
      });
    };

    if(validEmail === undefined) {
      this.setState({
        validEmail: false
      });
    };

    if(activeFeatures === true) {
      this.setState({
        someFeatureActive: false
      });
    };    

    if(isSelectedValue === undefined) {
      this.setState({
        isSelectedValue: false
      });
    };    
  }

  async submit(e) {
    e.preventDefault();     
    const path = '/registration-complete';   
    if(this.validate()){
      try {
        const { firstName, lastname, email, organization, advances, alerts, otherCommunication, selectedValue } = this.state;      
        const { message, reason } = await signUp({ 
          firstName, 
          lastname, 
          email, 
          organization, 
          advances, 
          alerts, 
          otherCommunication, 
          selectedValue 
        });            
        return this.props.history.push(path, { message, reason });      
      } catch({ message, reason }) {
        this.props.history.push(path, { message, reason });
      }
    }        
  }

  render() {         
    return (
      <FormContainer> 
        <form id='form' onSubmit={this.submit}>
          <Title>Sign up for email updates</Title>
          <Paragraph>*Indicates Required Field</Paragraph>
          <InputSection 
            onFirstNameChange={this.onFirstNameChange} 
            validFirstname={this.state.validFirstname} 
            onLastnameChange={this.onLastnameChange}
            validLastname={this.state.validLastname}
            onEmailChange={this.onEmailChange}
            validEmail={this.state.validEmail}
            onOrganizationChange={this.onOrganizationChange}
            setSelectedValue={this.setSelectedValue}
            selectedValue={this.state.selectedValue}
            isSelectedValue={this.state.isSelectedValue}
          />
          <OptionsSection 
            activeAdvances={this.activeAdvances} 
            advances={this.state.advances} 
            activeAlerts={this.activeAlerts}
            alerts={this.state.alerts}
            activeOtherCommunication={this.activeOtherCommunication}
            otherCommunication={this.state.otherCommunication}
            someFeatureActive={this.state.someFeatureActive}
          />
          <ResetButton type='button' onClick={this.resetForm}>RESET</ResetButton>
          <ButtonsContainer>
            <SubmitButton type='submit'>SUBMIT</SubmitButton>
          </ButtonsContainer>
        </form>
      </FormContainer>
    )
  }
}

export default withRouter(Form);