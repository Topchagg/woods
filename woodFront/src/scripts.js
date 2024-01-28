export const checkIsValid = (states) => {
    let isValid = true
    for(let i = 0; i < states.length; i++){
        if(states[i] === false){
            isValid = false
        }
    }
    return isValid
}

export const validOnlyChar = (func,setFunc,value,minLength,maxLength,setIsValid) => {
    console.log(/[!@#$%^&*(),.?":{}|<>;]/.test(value))
    if(/\d/.test(value) || /[+!)@('"><,}{.:;=~`№?#|$%^&*()_-]/.test(value)){
        
    }
    else {
        func(setFunc,value,minLength,maxLength,setIsValid)
    }

}

export const validOnlyNumb = (func,setFunc,value,minLength,maxLength,setIsValid) => {
    if(/[а-яА-Яa-zA-Z]/.test(value) || /[+!)@('"><,}{.:~`|;№?#=$%^&*()_-]/.test(value)){

    }
    else {
        func(setFunc,value,minLength,maxLength,setIsValid)
    }
}