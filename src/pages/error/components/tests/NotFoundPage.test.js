import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import NotFoundPage from 'pages/error/components/NotFoundPage';
import { BoxWrapper, Button, Container, ErrorLabel } from 'pages/error/components/styles/NotFoundPage.styles';
import { BrowserRouter } from 'react-router-dom';
import { specificSize } from 'utils/devicesSizeValidation';

describe('Shallow <NotFound />', () => {

    const wrapper = shallow(<NotFoundPage />);    

    it('Should has only one of these components BoxWrapper, one Button, Container, ErrorLabel', () => {
        const boxWrapper = wrapper.find(BoxWrapper);
        const button = wrapper.find(Button);
        const container = wrapper.find(Container);
        const errorLabel = wrapper.find(ErrorLabel);
        expect(boxWrapper).toHaveLength(1);
        expect(button).toHaveLength(1);
        expect(container).toHaveLength(1);
        expect(errorLabel).toHaveLength(1);
    });    

    it('h4 should has text 404 Page Not Found', () => {
        const text = wrapper.find(ErrorLabel).text();           
        expect(text).toBe('404 Page Not Found');
    });

    it('Link should has text Go back to homepage', () => {
        const text = wrapper.find(Button).text();        
        expect(text).toBe('Go back to homepage');
    });

    it('Link should has anchor to /', () => {
        const { to : goTo } = wrapper.find(Button).props();                
        expect(goTo).toBe('/');
    });
});

describe('Mount <NotFound />', () => {
    const component = mount(
        <BrowserRouter>
            <NotFoundPage />
        </BrowserRouter>
    );    

    it('Should has', () => {        
        const div = component.find('div')        
        const h1 = component.find('h1')        
        const link = component.find('Link')        
        expect(div).toHaveLength(2);
        expect(h1).toHaveLength(1);
        expect(link).toHaveLength(1);
    });

    
    it('Should has 2 div within Container', () => {        
        const container = component.find(Container);        
        const div = container.find('div');
        expect(div).toHaveLength(2);
    });

    it('Should has 1 div within BoxWrapper', () => {        
        const boxWrapper = component.find(BoxWrapper);        
        const div = boxWrapper.find('div');
        expect(div).toHaveLength(1);
    });

    it('Should has 1 h1 within Title', () => {        
        const errorLabel = component.find(ErrorLabel);  
        const h1 = errorLabel.find('h1');
        expect(h1).toHaveLength(1);
    });

    it('Should has 1 Link within Button', () => {        
        const button = component.find(Button);  
        const link = button.find('Link');
        expect(link).toHaveLength(1);
    });

    it('Should be Called Button', () => {       
        const mockFunction = jest.fn();
        const button = mount(
            <BrowserRouter>
                <Button to='/' onClick={mockFunction} />
            </BrowserRouter>
        );  
        expect(mockFunction).not.toHaveBeenCalled();
        button.simulate('click');
        expect(mockFunction).toHaveBeenCalled();
    });

    it('Should has text Go to home Page in Button', () => {        
        const button = component.find(Button);  
        const text = button.text();
        expect(text).toBe('Go back to homepage');
    });   

    it('should render with the correct styles for Container', () => {        

        const container = mount(<Container />);        
        
        expect(container).toHaveStyleRule('background', 'rgb(68 79 129 / 48%)')        
        expect(container).toHaveStyleRule('height', '100vh');
        expect(container).toHaveStyleRule('display', 'flex');
        expect(container).toHaveStyleRule('margin', 'auto');
        expect(container).toHaveStyleRule('flex-direction', 'column');
        expect(container).toHaveStyleRule('flex-wrap', 'nowrap');
        expect(container).toHaveStyleRule('align-content', 'center');
        expect(container).toHaveStyleRule('justify-content', 'center');
        expect(container).toHaveStyleRule('align-items', 'center');
      });

    it('should render with the correct styles for BoxWrapper', () => {        

        const container = mount(<BoxWrapper />);                
        expect(container).toHaveStyleRule('color', 'rgb(255,255,255)');
        expect(container).toHaveStyleRule('padding', '120px');
        expect(container).toHaveStyleRule('background', 'rgb(15 14 18 / 67%)');
        expect(container).toHaveStyleRule('border-radius', '20px');
        expect(container).toHaveStyleRule('box-shadow', '2px 2px 2px rgb(0 0 0)');
        expect(container).toHaveStyleRule('padding', '80px', {
            media: `only screen and ${specificSize.tablet}`
        });
        expect(container).toHaveStyleRule('padding', '40px', {
            media: `only screen and ${specificSize.mobile}`
        });
        expect(container).toHaveStyleRule('font-size', '0.4em', {
            media: `only screen and ${specificSize.mobile}`
        });        
    });

    it('should render with the correct styles for ErrorLabel', () => {        

        const container = mount(<ErrorLabel />);                

        expect(container).toHaveStyleRule('color', 'rgb(256,14,54)');
        expect(container).toHaveStyleRule('font-size', '4em');

    });

    it('should render with the correct styles for Button', () => {        

        const container = mount(
            <BrowserRouter>
                <Button to='/' />
            </BrowserRouter>
        );                

        expect(container).toHaveStyleRule('background', 'rgb(107 51 217)');
        expect(container).toHaveStyleRule('padding', '12px');
        expect(container).toHaveStyleRule('border-radius', '10px');
        expect(container).toHaveStyleRule('font-weight', '700');
        expect(container).toHaveStyleRule('text-decoration', 'none');
        expect(container).toHaveStyleRule('color', 'rgb(250,250,250)');
        expect(container).toHaveStyleRule('display', 'inline-block');
        expect(container).toHaveStyleRule('box-shadow', '2px 2px 1px rgb(58 60 88)');
        expect(container).toHaveStyleRule('margin-top', '18px');
        expect(container).toHaveStyleRule('padding', '8px', {
            media: `only screen and ${specificSize.mobile}`
        });
        expect(container).toHaveStyleRule('font-size', '1.3em', {
            media: `only screen and ${specificSize.mobile}`
        });
    });
    
});