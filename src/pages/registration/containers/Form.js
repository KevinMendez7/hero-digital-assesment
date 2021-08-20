import React from 'react';
import { withRouter } from 'react-router-dom';
import { signUp } from 'utils/api';
import InputSection from 'pages/registration/components/InputSection';
import OptionsSection from 'pages/registration/components/OptionsSection';
import { FormContainer, Title, Paragraph, ResetButton, ButtonsContainer, SubmitButton} from 'pages/registration/components/styles/Form.styles';
import useForm from 'hooks/useForm';


const Form = props => {

    const {
      resetForm,
      setSelectedValue,
      activeAdvances,
      activeAlerts,
      activeOtherCommunication,
      onFirstNameChange,
      onLastnameChange,
      onEmailChange,
      onOrganizationChange,   
      validate,   
      formValues
    } = useForm();

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