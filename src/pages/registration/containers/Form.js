import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { signUp } from 'utils/api';
import InputSection from 'pages/registration/components/InputSection';
import OptionsSection from 'pages/registration/components/OptionsSection';
import { FormContainer, Title, Paragraph, ResetButton, ButtonsContainer, SubmitButton} from 'pages/registration/components/styles/Form.styles';


const Form = props => {

  const _initialState = {
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

  const [ formValues, setFormValues ] = useState({ ..._initialState });   

  const resetForm = () => setFormValues({ ..._initialState });         

  const setSelectedValue = e => {        
    setFormValues(prevFormValues => ({  
      ...prevFormValues, 
      selectedValue: e.target.innerText,
      isSelectedValue: true
    }));
  }

  const activeAdvances = _ => {
    setFormValues(prevFormValues => ({  
      ...prevFormValues, 
      advances: !prevFormValues.advances,
      someFeatureActive: `${!prevFormValues.advances ? true : undefined}`
    }));
  }

  const activeAlerts = _ => {    
    setFormValues(prevFormValues => ({  
      ...prevFormValues, 
      alerts: !prevFormValues.alerts,
      someFeatureActive: `${prevFormValues.alerts ? false : undefined}`
    }));
  }

  const activeOtherCommunication = _ => {
    setFormValues(prevFormValues => ({  
      ...prevFormValues, 
      otherCommunication: !prevFormValues.otherCommunication,
      someFeatureActive: `${prevFormValues.otherCommunication ? false : undefined}`
    }));
  }

  const onFirstNameChange = e => {
    let validFirstname = false;
    if(e.target.value.length > 0) validFirstname = true;
    setFormValues(prevFormValues => ({  
      ...prevFormValues, 
      firstName: e.target.value,
      validFirstname
    }));
  }
  
  const onLastnameChange = e => {
    let validLastname = false;
    if(e.target.value.length > 0) validLastname = true;
    setFormValues(prevFormValues => ({  
      ...prevFormValues,
      lastname: e.target.value,
      validLastname
    }));    
  }
  
  const onEmailChange = e => {
    let validEmail = false;
    if(e.target.value.length > 0 && e.target.value.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")) validEmail = true;
    setFormValues(prevFormValues => ({  
      ...prevFormValues,
      email: e.target.value,
      validEmail
    }));
  }
  
  const onOrganizationChange = e => {    
    setFormValues(prevFormValues => ({  
      ...prevFormValues,
      organization: e.target.value
    }));  
  }

  const validate = _ => {
    const { validFirstname, validLastname, validEmail, advances, alerts, otherCommunication, isSelectedValue } = formValues;        
    
    validateFirstInvalidSubmit(validFirstname, validLastname, validEmail, !(advances || alerts || otherCommunication), isSelectedValue);
    
    if(!validFirstname) return false;
    if(!validLastname) return false;
    if(!validEmail) return false;   
    if(!isSelectedValue) return false; 
    if(!(advances || alerts || otherCommunication)) return false;
    return true;
  }

  const validateFirstInvalidSubmit = (validFirstname, validLastname, validEmail, activeFeatures, isSelectedValue) => { 
    const validFieldsObject = {};   
    if(Object.is(validFirstname, undefined)) {
      validFirstname = false;
      validFieldsObject['validFirstname'] = validFirstname;
    };

    if(Object.is(validLastname, undefined)) {
      validLastname = false;      
      validFieldsObject['validLastname'] = validLastname;
    };

    if(Object.is(validEmail,undefined)) {
      validEmail = false;      
      validFieldsObject['validEmail'] = validEmail;
    };

    if(Object.is(activeFeatures, true)) {
      activeFeatures = false;
      validFieldsObject['someFeatureActive'] = activeFeatures;
    };    

    if(Object.is(isSelectedValue, undefined)) {
      isSelectedValue = false;
      validFieldsObject['isSelectedValue'] = isSelectedValue;
    };    

    setFormValues(prevFormValues => ({  
      ...prevFormValues,
      ...validFieldsObject
    }));

  }

  const submit = async e => {
    e.preventDefault();     
    const path = '/registration-complete';   
    if(validate()){
      try {
        const { firstName, lastname, email, organization, advances, alerts, otherCommunication, selectedValue } = formValues;      
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
        return props.history.push(path, { message, reason });      
      } catch({ message, reason }) {
        props.history.push(path, { message, reason });
      }
    }        
  }
   
    return (
      <FormContainer> 
        <form id='form' onSubmit={submit}>
          <Title>Sign up for email updates</Title>
          <Paragraph>*Indicates Required Field</Paragraph>
          <InputSection 
            firstName={formValues.firstName}
            onFirstNameChange={onFirstNameChange} 
            validFirstname={formValues.validFirstname} 
            lastname={formValues.lastname}
            onLastnameChange={onLastnameChange}
            validLastname={formValues.validLastname}
            email={formValues.email}
            onEmailChange={onEmailChange}
            validEmail={formValues.validEmail}
            organization={formValues.organization}
            onOrganizationChange={onOrganizationChange}
            setSelectedValue={setSelectedValue}
            selectedValue={formValues.selectedValue}
            isSelectedValue={formValues.isSelectedValue}
          />
          <OptionsSection 
            activeAdvances={activeAdvances} 
            advances={formValues.advances} 
            activeAlerts={activeAlerts}
            alerts={formValues.alerts}
            activeOtherCommunication={activeOtherCommunication}
            otherCommunication={formValues.otherCommunication}
            someFeatureActive={formValues.someFeatureActive}
          />
          <ResetButton type='button' onClick={resetForm}>RESET</ResetButton>
          <ButtonsContainer>
            <SubmitButton type='submit'>SUBMIT</SubmitButton>
          </ButtonsContainer>
        </form>
      </FormContainer>
    );
};

export default withRouter(Form);