import { mount } from 'enzyme';
import 'jest-styled-components';
import Body from 'pages/home/components/Body';
import { BodyContainer } from 'pages/home/components/styles/Body.styles';
import Background from 'assets/texture.png';
import { device, specificSize } from 'utils/devicesSizeValidation';

describe('Body', () => {

    const component = mount(<Body />);

    it('Should has BodyContainer', () => {
        const bodyContainer = component.find(BodyContainer);
        expect(bodyContainer).toHaveLength(1);
    });

    it('Should has 1 div', () => {
        const bodyContainer = component.find(BodyContainer);
        const div = bodyContainer.find('div');
        expect(div).toHaveLength(1);
    });

    it('should render with the correct styles for BodyContainer', () => {
        const bodyContainer = mount(<BodyContainer />);
        
        expect(bodyContainer).toHaveStyleRule('display', 'flex');
        expect(bodyContainer).toHaveStyleRule('justify-content', 'center');
        expect(bodyContainer).toHaveStyleRule('align-items', 'center') 
        expect(bodyContainer).toHaveStyleRule('flex-direction', 'row');
        expect(bodyContainer).toHaveStyleRule('flex-wrap', 'wrap');
        expect(bodyContainer).toHaveStyleRule('padding', '10px 50px');
        expect(bodyContainer).toHaveStyleRule('margin', '0 20%');
        expect(bodyContainer).toHaveStyleRule('background', 'rgb(255 255 255)');
        expect(bodyContainer).toHaveStyleRule('border-radius', '20px');
        expect(bodyContainer).toHaveStyleRule('box-shadow', '5px 5px 1px rgb(255 255 255 / 62%)');
        expect(bodyContainer).toHaveStyleRule('background-image', `url(${Background})`);
        expect(bodyContainer).toHaveStyleRule('margin', `0 30%`, {
            media: `only screen and ${device.desktop}`
        });
        expect(bodyContainer).toHaveStyleRule('margin', `20px`, {
            media: `only screen and ${specificSize.tablet}`
        });
        expect(bodyContainer).toHaveStyleRule('margin', `8px`, {
            media: `only screen and ${specificSize.mobile}`
        });
        expect(bodyContainer).toHaveStyleRule('padding', `0`, {
            media: `only screen and ${specificSize.mobile}`
        });
    });
});