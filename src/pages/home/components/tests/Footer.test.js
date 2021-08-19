import { mount } from 'enzyme';
import 'jest-styled-components';
import { specificSize } from 'utils/devicesSizeValidation';
import Footer from 'pages/home/components/Footer';
import { CustomFooter, Paragraph } from 'pages/home/components/styles/Footer.styles';

describe('Footer', () => {
    const component = mount(<Footer />);

    it('Should has 1 of CustomFooter and 2 Paragraph', () => {
        const customFooter = component.find(CustomFooter);
        const paragraph = component.find(Paragraph);
        expect(customFooter).toHaveLength(1);
        expect(paragraph).toHaveLength(2);
    });

    it('Should has 1 div', () => {
        const customFooter = component.find(CustomFooter);
        const div = customFooter.find('footer');
        expect(div).toHaveLength(1);
    });

    it('Should has 2 p', () => {
        const paragraph = component.find(Paragraph);
        const p = paragraph.find('p');
        expect(p).toHaveLength(2);
    });

    it('Should has text "Registration page . created for a HERO DIGITAL assessment." in Paragraph at position 1', () => {
        const text = component.find(Paragraph).at(0).text();
        expect(text).toEqual('Registration page . created for a HERO DIGITAL assessment.');
    });

    it('Should has text "HERO DIGITAL . Kevin Mendez © 2021." in Paragraph at position 1', () => {
        const text = component.find(Paragraph).at(1).text();
        expect(text).toEqual('HERO DIGITAL . Kevin Mendez © 2021.');
    });

    it('Should render with the correct styles for CustomerFooter', () => {
        const component = mount(<CustomFooter />);

        expect(component).toHaveStyleRule('margin-top', '20px');
        
        expect(component).toHaveStyleRule('padding', '30px 15px');    
        expect(component).toHaveStyleRule('display', 'flex');
        expect(component).toHaveStyleRule('text-align', 'center');
        expect(component).toHaveStyleRule('flex-direction', 'column');    
        expect(component).toHaveStyleRule('font-size', 'calc(10px + 2vmin)');
        expect(component).toHaveStyleRule('color', 'white');
        expect(component).toHaveStyleRule('margin-top', 'unset', {
            media: `only screen and ${specificSize.mobile}` 
        });
        expect(component).toHaveStyleRule('padding', '20px 15px', {
            media: `only screen and ${specificSize.mobile}` 
        });        
    });
});