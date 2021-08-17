const successMock = { 
    'status': 'success', 
    'message': 'Thank you. You are now subscribed.' 
};
const failureMock = { 
    'status': 'error', 
    'message': 'Invalid Subscription request.',
    'reason': '' 
}

export async function signUp(...values){   
    
    if(!arguments[0]) {
        failureMock.reason = `Bad request`;
        return Promise.reject(failureMock);
    }

    const params = Object.entries(arguments[0])
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
    
    const resp = await request(params);
    return resp;

    
}

const request = (params) => {
    const decodedParamsArray = decodeURIComponent(params).split('&')
    const { firstName, lastname, organization } = decodedParamsArray.reduce((prev, value) => {        
        const keyValueSplitArray = value.split('=');
        return { ...prev, [keyValueSplitArray[0]]: keyValueSplitArray[1]}
        }, {});

    return new Promise((resolve, reject) => {
        let errorLabel = minLengthValidation({ firstName, lastname, organization });
    
        if(errorLabel) {
            failureMock.reason = `${errorLabel} must have at least 4 characters, please try again`;
            return reject(failureMock);
        }
        return resolve(successMock);
    });
}

const minLengthValidation = ({firstName, lastname, organization}) => {
    const minLength = 4;
    if(firstName.length < minLength) {
        return 'firstname'
    }

    if(lastname.length < minLength) {
        return 'lastname'
    }

    if(organization.length < minLength) {
        return 'organization'
    }

    return false;
}

