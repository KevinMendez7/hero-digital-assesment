import { mount } from 'enzyme';
import 'jest-styled-components';
import { specificSize } from '../../../../utils/devicesSizeValidation';
import Header from '../Header';
import { CustomHeader, Paragraph, Title } from '../styles/Header.styles';

describe('Header', () => {
    const component = mount(<Header />);

    it('Should has 1 of CustomHeader, Title, Paragraph', () => {
        const customHeader = component.find(CustomHeader);
        const title = component.find(Title);
        const paragraph = component.find(Paragraph);
        expect(customHeader).toHaveLength(1);
        expect(title).toHaveLength(1);
        expect(paragraph).toHaveLength(1);
    });

    it('Should has 1 header tag in CustomHeader', () => {
        const customHeader = component.find(CustomHeader);
        const div = customHeader.find('header');
        expect(div).toHaveLength(1);
    });

    it('Should has 1 h1 tag in CustomHeader', () => {
        const title = component.find(Title);
        const div = title.find('h1');
        expect(div).toHaveLength(1);
    });

    it('Should has 1 p tag in Paragraph', () => {
        const paragraph = component.find(Paragraph);
        const div = paragraph.find('p');
        expect(div).toHaveLength(1);
    });

    it('Should has  text "HERO ASSESSMENT" in Paragraph', () => {
        const title = component.find(Title).text();        
        expect(title).toEqual("HERO ASSESSMENT");
    });

    it('Should has  text "Welcome" in Paragraph', () => {
        const paragraph = component.find(Paragraph).text();        
        expect(paragraph).toEqual("Welcome");
    });

    it('Should render with correct styles for CustomHeader', () => {
        const component = mount(<CustomHeader /> );

        expect(component).toHaveStyleRule('margin-bottom', '20px');
        
        expect(component).toHaveStyleRule('padding', '30px 15px');  
        expect(component).toHaveStyleRule('display', 'flex');
        expect(component).toHaveStyleRule('flex-direction', 'column');
        expect(component).toHaveStyleRule('align-items', 'center');
        expect(component).toHaveStyleRule('justify-content', 'center');
        expect(component).toHaveStyleRule('font-size', 'calc(10px + 2vmin)');
        expect(component).toHaveStyleRule('color', 'white');
        expect(component).toHaveStyleRule('margin-bottom', '0', {
            media: `only screen and ${specificSize.tablet}` 
        });
        expect(component).toHaveStyleRule('padding', '12px 15px', {
            media: `only screen and ${specificSize.tablet}` 
        });
        expect(component).toHaveStyleRule('margin-bottom', '0', {
            media: `only screen and ${specificSize.mobile}` 
        });
    });

    it('Should render with correct styles for Title', () => { 
        const component = mount(<Title /> );

        expect(component).toHaveStyleRule('text-align', 'center');        
        expect(component).toHaveStyleRule('color', 'rgb(122 255 135 / 48%)');
        expect(component).toHaveStyleRule('font-weight', 'bolder');
        expect(component).toHaveStyleRule('font-size', '1.5em', {
            media: `only screen and ${specificSize.mobile}`
        });
    });

    it('Should render with correct styles for Paragraph', () => { 
        const component = mount(<Paragraph /> );

        expect(component).toHaveStyleRule('text-align', 'center');        
        expect(component).toHaveStyleRule('font-size', '20px');        
        expect(component).toHaveStyleRule('margin', '0', {
            media: `only screen and ${specificSize.mobile}`
        });
    });
});