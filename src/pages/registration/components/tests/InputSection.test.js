import { mount } from 'enzyme';
import 'jest-styled-components';
import { specificSize } from 'utils/devicesSizeValidation';
import { ItemLabel } from 'pages/utils/components/styles/CustomComboBox.styles';
import CustomComboBox from 'pages/utils/containers/CustomComboBox';
import InputSection from 'pages/registration/components/InputSection';
import { ErrorLabel, Input, InputLabelWrap, Label, NestedContainer } from 'pages/registration/components/styles/Form.styles';

describe('InputSection with initial state', () => {

    const initialState = {
        firstName: '',
        validFirstname: undefined,
        lastname: '',
        validLastname: undefined,
        email: '',
        validEmail: undefined,
        organization: '',
        euResident: '',        
        selectedValue: '- SELECT ONE -',
        isSelectedValue: undefined
    }

    const component = mount(
    <InputSection 
        validFirstname={initialState.validFirstname} 
        validLastname={initialState.validLastname}
        validEmail={initialState.validEmail}
        selectedValue={initialState.selectedValue}
        isSelectedValue={initialState.isSelectedValue}
    />);

    it('Should has 17 divs in InputSection', () => {        
        const div = component.find('div');
        expect(div).toHaveLength(17);
    });

    it('Should has 5 labels in InputSection', () => {        
        const label = component.find('label');
        expect(label).toHaveLength(5);
    });

    it('Should has 4 inputs in InputSection', () => {        
        const input = component.find('input');
        expect(input).toHaveLength(4);
    });    

    it('should has 1 NestedContainer', () => {
        const nestedContainer = component.find(NestedContainer);
        expect(nestedContainer).toHaveLength(1);
    });

    it('Should has 1 div in NestedContainer', () => {
        const nestedContainer = mount(<NestedContainer />);
        const div = nestedContainer.find('div');
        expect(div).toHaveLength(1);
    });

    it('should has 5 InputLabelWrap', () => {
        const inputLabelWrap = component.find(InputLabelWrap);
        expect(inputLabelWrap).toHaveLength(5);
    });    

    it('should has 5 Label', () => {
        const label = component.find(Label);
        expect(label).toHaveLength(5);
    });

    it('should has 5 Input', () => {
        const input = component.find(Input);
        expect(input).toHaveLength(4);
    });

    it('should has 1 CustomComboBox', () => {
        const customComboBox = component.find(CustomComboBox);
        expect(customComboBox).toHaveLength(1);
    });

    it('should has 8 ItemLabel', () => {
        const itemLabel = component.find(ItemLabel);
        expect(itemLabel).toHaveLength(8);
    });

    it('should has 0 ErrorLabel', () => {
        const errorLabel = component.find(ErrorLabel);
        expect(errorLabel).toHaveLength(0);
    });

    it('Should has text "FIRST NAME*" in Label at postion 0', () => {
        const label = component.find(Label);
        const text = label.at(0).text();
        expect(text).toEqual('FIRST NAME*');
    });    

    it('Should has text "LAST NAME*" in Label at postion 1', () => {
        const label = component.find(Label);
        const text = label.at(1).text();
        expect(text).toEqual('LAST NAME*');
    });

    it('Should has text "EMAIL ADDRESS*" in Label at postion 2', () => {
        const label = component.find(Label);
        const text = label.at(2).text();
        expect(text).toEqual('EMAIL ADDRESS*');
    });

    it('Should has text "EU RESIDENT*" in Label at postion 4', () => {
        const label = component.find(Label);
        const text = label.at(4).text();
        expect(text).toEqual('EU RESIDENT*');
    });

    it('Should has text "I" in ItemLabel at postion 0', () => {
        const itemLabel = component.find(ItemLabel);
        const text = itemLabel.at(0).text();
        expect(text).toEqual('I');
    });

    it('Should has text "DID" in ItemLabel at postion 1', () => {
        const itemLabel = component.find(ItemLabel);
        const text = itemLabel.at(1).text();
        expect(text).toEqual('DID');
    });

    it('Should has text "NOT" in ItemLabel at postion 2', () => {
        const itemLabel = component.find(ItemLabel);
        const text = itemLabel.at(2).text();
        expect(text).toEqual('NOT');
    });

    it('Should has text "KNOW" in ItemLabel at postion 3', () => {
        const itemLabel = component.find(ItemLabel);
        const text = itemLabel.at(3).text();
        expect(text).toEqual('KNOW');
    });

    it('Should has text "WHAT" in ItemLabel at postion 4', () => {
        const itemLabel = component.find(ItemLabel);
        const text = itemLabel.at(4).text();
        expect(text).toEqual('WHAT');
    });

    it('Should has text "TO" in ItemLabel at postion 5', () => {
        const itemLabel = component.find(ItemLabel);
        const text = itemLabel.at(5).text();
        expect(text).toEqual('TO');
    });

    it('Should has text "PUT" in ItemLabel at postion 6', () => {
        const itemLabel = component.find(ItemLabel);
        const text = itemLabel.at(6).text();
        expect(text).toEqual('PUT');
    });

    it('Should has text "HERE" in ItemLabel at postion 7', () => {
        const itemLabel = component.find(ItemLabel);
        const text = itemLabel.at(7).text();
        expect(text).toEqual('HERE');
    });    

    it('Should has text "Type your firstname" as placeholder in Input at postion 0', () => {
        const input = component.find(Input);
        const text = input.at(0).prop('placeholder');
        expect(text).toEqual('Type your firstname');
    });

    it('Should be text type in Input at postion 0', () => {
        const input = component.find(Input);
        const text = input.at(0).prop('type');
        expect(text).toEqual('text');
    });

    it('Should has valid prop as undefined in Input at postion 0', () => {
        const input = component.find(Input);
        const valid = input.at(0).prop('valid');
        expect(valid).toBe(undefined);
    });

    it('Should has text "Type your lastname" as placeholder in Input at postion 1', () => {
        const input = component.find(Input);
        const text = input.at(1).prop('placeholder');
        expect(text).toEqual('Type your lastname');
    });

    it('Should be text type in Input at postion 1', () => {
        const input = component.find(Input);
        const text = input.at(1).prop('type');
        expect(text).toEqual('text');
    });

    it('Should has valid prop as undefined in Input at postion 1', () => {
        const input = component.find(Input);
        const valid = input.at(1).prop('valid');
        expect(valid).toBe(undefined);
    });

    it('Should has text "Type your email" as placeholder in Input at postion 2', () => {
        const input = component.find(Input);
        const text = input.at(2).prop('placeholder');
        expect(text).toEqual('Type your email');
    });

    it('Should be text type in Input at postion 2', () => {
        const input = component.find(Input);
        const text = input.at(2).prop('type');
        expect(text).toEqual('text');
    });

    it('Should has valid prop as undefined in Input at postion 2', () => {
        const input = component.find(Input);
        const valid = input.at(2).prop('valid');
        expect(valid).toBe(undefined);
    });

    it('Should has text "Type your organization" as placeholder in Input at postion 3', () => {
        const input = component.find(Input);
        const text = input.at(3).prop('placeholder');
        expect(text).toEqual('Type your organization');
    });

    it('Should be text type in Input at postion 3', () => {
        const input = component.find(Input);
        const text = input.at(3).prop('type');
        expect(text).toEqual('text');
    });

    it('Should has valid prop as undefined in Input at postion 3', () => {
        const input = component.find(Input);
        const valid = input.at(3).prop('valid');
        expect(valid).toBe(undefined);
    });

    it('Should has valid prop as undefined in CustomComboBox', () => {
        const customComboBox = component.find(CustomComboBox);
        const valid = customComboBox.prop('valid');
        expect(valid).toBe(undefined);
    });

    it('Should has initial selectedValue as prop in CustomComboBox', () => {
        const customComboBox = component.find(CustomComboBox);
        const selected = customComboBox.prop('selected');
        expect(selected).toBe(initialState.selectedValue);
    });

});

describe('InputSection with initial state as valid inputs false', () => {

    const initialState = {
        firstName: '',
        validFirstname: false,
        lastname: '',
        validLastname: false,
        email: '',
        validEmail: false,
        organization: '',
        euResident: '',        
        selectedValue: '- SELECT ONE -',
        isSelectedValue: false
    }

    const component = mount(
    <InputSection 
        validFirstname={initialState.validFirstname} 
        validLastname={initialState.validLastname}
        validEmail={initialState.validEmail}
        selectedValue={initialState.selectedValue}
        isSelectedValue={initialState.isSelectedValue}
    />);    

    it('should has 4 ErrorLabel', () => {
        const errorLabel = component.find(ErrorLabel);
        expect(errorLabel).toHaveLength(4);
    });

    it('Should has text "Firstname is required" in ErrorLabel at postion 0', () => {
        const errorLabel = component.find(ErrorLabel);
        const text = errorLabel.at(0).text();
        expect(text).toEqual('Firstname is required');
    });    

    it('Should has text "Lastname is required" in ErrorLabel at postion 1', () => {
        const errorLabel = component.find(ErrorLabel);
        const text = errorLabel.at(1).text();
        expect(text).toEqual('Lastname is required');
    });    

    it('Should has text "Email is required" in ErrorLabel at postion 2', () => {
        const errorLabel = component.find(ErrorLabel);
        const text = errorLabel.at(2).text();
        expect(text).toEqual('Email is required');
    });    

    it('Should has text "EU resident is required, please select one" in ErrorLabel at postion 3', () => {
        const errorLabel = component.find(ErrorLabel);
        const text = errorLabel.at(3).text();
        expect(text).toEqual('EU resident is required, please select one');
    });    

    it('Should render with correct styles for NestedContainer', () => {
        const component = mount(<NestedContainer />);
        expect(component).toHaveStyleRule('display', 'flex');        
        expect(component).toHaveStyleRule('flex-direction', 'row');
        expect(component).toHaveStyleRule('flex-wrap', 'wrap');
        expect(component).toHaveStyleRule('margin-top', '4%');
        expect(component).toHaveStyleRule('margin-bottom', '4%');
        expect(component).toHaveStyleRule('flex-direction', 'column', {
            media: `only screen and ${specificSize.mobile}`
        });
    });

    it('Should render with correct styles for InputLabelWrap', () => {
        const component = mount(<InputLabelWrap />);

        expect(component).toHaveStyleRule('width', '50%');                
        expect(component).toHaveStyleRule('width', '100%', {
            media: `only screen and ${specificSize.mobile}`
        });
        expect(component).toHaveStyleRule('text-align', '-webkit-center', {
            media: `only screen and ${specificSize.mobile}`
        });
    });

    it('Should render with correct styles for Label', () => {
        const component = mount(<Label />);
                  
        expect(component).toHaveStyleRule('font-size', '0.8em', {
            media: `only screen and ${specificSize.mobile}`
        });
        expect(component).toHaveStyleRule('font-weight', 'bolder', {
            media: `only screen and ${specificSize.mobile}`
        });        
    });    

    it('Should render with correct styles for Input with undefined || true valid prop', () => {
        const component = mount(<Input valid={true} />);

        expect(component).toHaveStyleRule('display', 'inherit');

        expect(component).toHaveStyleRule('width', '85%');
        expect(component).toHaveStyleRule('padding', '2% 7px');
        expect(component).toHaveStyleRule('margin-top', '3%');
        expect(component).toHaveStyleRule('margin-bottom', '3%');
        expect(component).toHaveStyleRule('border', 'rgb(80 190 188 / 33%) 3.5px solid');
        expect(component).toHaveStyleRule('border-radius', '15px');
        expect(component).toHaveStyleRule('box-shadow', '2px 2px 3px rgb(80 190 188 / 33%)');
        expect(component).toHaveStyleRule('background', 'white');  
        expect(component).toHaveStyleRule('border', 'rgb(80 190 188 / 33%) 2.5px solid', {
            media: `only screen and ${specificSize.mobile}`
        });  
        expect(component).toHaveStyleRule('height', '15px', {
            media: `only screen and ${specificSize.mobile}`
        });          
    });
    
    it('Should render with correct styles for Input with false valid prop', () => {
        const component = mount(<Input valid={false} />);
        
        expect(component).toHaveStyleRule('border', 'rgb(225 131 149) 3.5px solid');        
        expect(component).toHaveStyleRule('background', 'rgb(248 231 231)');  
        expect(component).toHaveStyleRule('border', 'rgb(225 131 149) 2.5px solid', {
            media: `only screen and ${specificSize.mobile}`
        });          
    });
    
    it('Should render with correct styles for ErrorLabel', () => {
        const component = mount(<ErrorLabel />);

        expect(component).toHaveStyleRule('margin', '17px 0px 10px 15px');    
        expect(component).toHaveStyleRule('color', 'red');   
        expect(component).toHaveStyleRule('margin', '0 0px 10px 15px', {
            media: `only screen and ${specificSize.mobile}`
        });          
        expect(component).toHaveStyleRule('font-size', '0.9em', {
            media: `only screen and ${specificSize.mobile}`
        });  
    });    

});