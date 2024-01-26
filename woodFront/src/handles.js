export const handleOnChange = (setFunc,value, minLength, maxLength, setIsValid) => {
    if(value.length > maxLength){
        
    }
    else if( value.length < minLength) {
        setFunc(value)
        setIsValid(false) 
    }
    else {
       setFunc(value)
       setIsValid(true)
    }
}

    