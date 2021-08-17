import React from 'react';
import OutsideUtil from './OutsideUtil';
import { Span, SelectedItem, ComboBoxContainer, OptionsContainer, ItemContainer, Arrow, ItemText } from '../components/styles/CustomComboBox.styles';

class CustomComboBox extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };     
        this.expandList = this.expandList.bind(this);
        this.closeList = this.closeList.bind(this);
    }
    expandList() {        
        this.setState(state => ({
            expanded : !state.expanded
        }));
    }

    closeList() { 
        if(this.state.expanded) {
            this.setState({
                expanded : false,            
            });
        }       
    }

    render() {          
        const { state: { expanded }, props: { select, selected, children, valid } } = this;        
        return (
            <OutsideUtil onClickedOutside={this.closeList}>
                <Span onClick={this.expandList} onBlur={this.closeList} active={expanded}>                    
                        <SelectedItem active={expanded} valid={valid}>
                            <>
                                <ItemText>{selected}</ItemText>                                
                                <Arrow active={expanded ? 1 : 0} />
                            </>
                        </SelectedItem>                                            
                    <ComboBoxContainer expanded={expanded}>            
                        <OptionsContainer>
                            {
                                React.Children.map(children, child => <ItemContainer onClick={select}>{child}</ItemContainer>)
                            }
                        </OptionsContainer>                    
                    </ComboBoxContainer>
                </Span>
            </OutsideUtil>
        );
    }
}

export default CustomComboBox;