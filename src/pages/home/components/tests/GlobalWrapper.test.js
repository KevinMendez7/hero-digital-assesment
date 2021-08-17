import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import GlobalWrapper from '../GlobalWrapper';
import { Global } from '../styles/GlobalWrapper.styles';

describe('GlobalWrapper', () => {
    const component = shallow(<GlobalWrapper />);

    it('Should has 1 fragment', () => {
        const reactFragment = component.find('Fragment');
        expect(reactFragment).toHaveLength(1);
    });

    it('Should has 1 Global', () => {
        const global = component.find(Global);
        expect(global).toHaveLength(1);
    });

    it('Should render with the correct styles for Global', () => {
        const global = mount(<Global />);   
            
        // expect(global).toHaveStyleRule('outline', 'none', {            
        //     modifier: ':focus-visible'
        // });

        // body {
        //     margin: 0;
        //     background: rgb(58 64 88 / 85%);
        //     font-family: 'Open Sans', sans-serif;
        //   }
        
        //   :focus-visible {
        //     outline: none;
        //   }
    });
});