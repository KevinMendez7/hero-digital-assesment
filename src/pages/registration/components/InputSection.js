import React from 'react';
import CustomComboBox from '../../utils/containers/CustomComboBox';
import { ErrorLabel, Input, InputLabelWrap, Label, NestedContainer } from '../components/styles/Form.styles';
import { ItemLabel } from '../../utils/components/styles/CustomComboBox.styles';

const InputSection = props => (
  <NestedContainer>
    <InputLabelWrap>
      <Label>FIRST NAME*</Label>
      <Input 
        onChange={props.onFirstNameChange} 
        type='text' 
        valid={props.validFirstname} 
        placeholder='Type your firstname' 
        value={props.firstName}
      />
      {
        !props.validFirstname && props.validFirstname !== undefined
        ? <ErrorLabel>Firstname is required</ErrorLabel>
        : <></>
      }
    </InputLabelWrap>
    <InputLabelWrap>
      <Label>LAST NAME*</Label>
      <Input 
        onChange={props.onLastnameChange} 
        type='text' 
        valid={props.validLastname} 
        placeholder='Type your lastname' 
        value={props.lastname}
      />
      {
        !props.validLastname && props.validLastname !== undefined
        ? <ErrorLabel>Lastname is required</ErrorLabel>
        : <></>
      }
    </InputLabelWrap>
    <InputLabelWrap>
      <Label>EMAIL ADDRESS*</Label>
      <Input 
        onChange={props.onEmailChange} 
        type='text' 
        valid={props.validEmail} 
        placeholder='Type your email' 
        value={props.email}
      />
      {
        !props.validEmail && props.validEmail !== undefined
        ? <ErrorLabel>Email is required</ErrorLabel>
        : <></>
      }
    </InputLabelWrap>
    <InputLabelWrap>
      <Label>ORGANIZATION</Label>
      <Input 
        onChange={props.onOrganizationChange} 
        type='text' 
        placeholder='Type your organization' 
        value={props.organization}
      />
    </InputLabelWrap>
    <InputLabelWrap>
      <Label>EU RESIDENT*</Label>
      <CustomComboBox select={props.setSelectedValue} selected={props.selectedValue} valid={props.isSelectedValue}>
        <ItemLabel>I</ItemLabel>
        <ItemLabel>DID</ItemLabel>
        <ItemLabel>NOT</ItemLabel>
        <ItemLabel>KNOW</ItemLabel>
        <ItemLabel>WHAT</ItemLabel>
        <ItemLabel>TO</ItemLabel>
        <ItemLabel>PUT</ItemLabel>
        <ItemLabel>HERE</ItemLabel>
      </CustomComboBox>         
      {
        !props.isSelectedValue && props.isSelectedValue !== undefined
        ? <ErrorLabel>EU resident is required, please select one</ErrorLabel>
        : <></>
      }
    </InputLabelWrap>
  </NestedContainer>
);

export default InputSection;