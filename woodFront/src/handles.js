import { isValidPhoneNumber, parsePhoneNumber } from 'libphonenumber-js'

export const handleOnChange = (setFunc,value,length) => {
    if(value.length > length){
        
    }
    else if(isValidPhoneNumber(value,'UA')){
        const phoneNumber = parsePhoneNumber(value,'UA')    
        setFunc(phoneNumber.number)
    }
    else {
       setFunc(value)
    }
}

    