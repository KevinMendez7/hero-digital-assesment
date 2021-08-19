import { mount } from 'enzyme';
import 'jest-styled-components';
import { BrowserRouter } from 'react-router-dom';
import Form from 'pages/registration/containers/Form';
import Body from 'pages/registration/components/Body';
import Header from 'pages/registration/components/Header';
import { Container } from 'pages/registration/components/styles/Home.styles';
import Home from 'pages/home/containers/Home';

describe('Home', () => {
    const component = mount(
        <BrowserRouter>
            <Home /> 
        </BrowserRouter>
    );
    it('Should has 1 of Container Header Body Form within Home', () => {
        const container = component.find(Container);
        const header = component.find(Header);
        const body = component.find(Body);
        const form = component.find(Form);
        expect(container).toHaveLength(1);
        expect(header).toHaveLength(1);
        expect(body).toHaveLength(1);
        expect(form).toHaveLength(1);
    });

    it('Should has 28 div tag within Home', () => {
        const container = component.find(Container);
        const div = container.find('div');
        expect(div).toHaveLength(28);
    });

    it('Should has 1 div tag within Home', () => {
        const container = mount(<Container />);
        const div = container.find('div');
        expect(div).toHaveLength(1);
    });    

    it('Should render with correct styles in Container', () => {
        const component = mount(<Container />);
        expect(component).toHaveStyleRule('background', 'rgb(58 64 88 / 85%)');       
        expect(component).toHaveStyleRule('padding', '0');
        expect(component).toHaveStyleRule('margin', '0');
    });


});