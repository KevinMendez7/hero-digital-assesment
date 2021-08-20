import { useState } from 'react';

const useForm = _ => {
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
    validateFirstInvalidSubmit({ 
      validFirstname, 
      validLastname, 
      validEmail, 
      someFeatureActive: !(advances || alerts || otherCommunication) ? undefined : true, 
      isSelectedValue
    });
    
    if(!validFirstname) return false;
    if(!validLastname) return false;
    if(!validEmail) return false;   
    if(!isSelectedValue) return false; 
    if(!(advances || alerts || otherCommunication)) return false;
    return true;
  }
  
  const validateFirstInvalidSubmit = ({...params}) => {         
    const validFieldsObject = {};             
    for(let param in params) {              
      if(Object.is(params[param], undefined)) {
        validFieldsObject[param] = false;
      }
    }   
              
    setFormValues(prevFormValues => ({  
      ...prevFormValues,
      ...validFieldsObject
    }));
  }      

  return {
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
  }
}

export default useForm;