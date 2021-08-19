import CustomCheck from 'pages/utils/containers/CustomCheck';
import { CheckLabel, CheckLabelWrap, ErrorLabel, OptionsContainer } from 'pages/registration/components/styles/Form.styles';

const OptionsSection = props => {
    return (
        <>
        <OptionsContainer>
            <CheckLabelWrap>
              <CustomCheck onChange={props.activeAdvances} value={props.advances} />
              <CheckLabel>ADVANCES</CheckLabel>
            </CheckLabelWrap>
            <CheckLabelWrap>
              <CustomCheck onChange={props.activeAlerts} value={props.alerts} />
              <CheckLabel>ALERTS</CheckLabel>
            </CheckLabelWrap>
            <CheckLabelWrap>
              <CustomCheck onChange={props.activeOtherCommunication} value={props.otherCommunication} />
              <CheckLabel>OTHER COMMUNICATIONS</CheckLabel>
            </CheckLabelWrap>                    
        </OptionsContainer>
        {
            !props.someFeatureActive && props.someFeatureActive !== undefined
            ? <ErrorLabel>At least one feature must be checked</ErrorLabel>
            : <></>
        }
        </>
    );
}

export default OptionsSection;