import React, { useState } from 'react';
import OutsideUtil from './OutsideUtil';
import { Span, SelectedItem, ComboBoxContainer, OptionsContainer, ItemContainer, Arrow, ItemText } from '../components/styles/CustomComboBox.styles';

const CustomComboBox = ({ select, selected, children, valid }) => {

    const [ expanded, setExpanded ] = useState(false);
    
    const expandList = _ => {        
        setExpanded(!expanded);
    }

    const closeList = _ => { 
        setExpanded(false);
    }
       
    return (
        <OutsideUtil onClickedOutside={closeList}>
            <Span onClick={expandList} onBlur={closeList} active={expanded}>                    
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

export default CustomComboBox;