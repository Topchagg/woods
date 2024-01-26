import { useState } from "react"
import { handleOnChange} from "../handles"
import { usePost } from "../customHooks"
import { motion } from "framer-motion"
import { validOnlyChar,validOnlyNumb, checkIsValid } from "../scripts"


import Button from "./button"
import ErrComponent from "./raiseError"

const MessageForm = () => {

    const [formIsValid, setFormIsValid] = useState(true)

    const [nameIsValid, setNameIsValid] = useState(false)
    const [phoneNumberIsValid, setPhonenumberIsValid] = useState(false)
    const [messageIsValid, setMessageIsValid] = useState(false)
    const [name, setName] = useState('')
    const [phoneNumber, setPhonenumber] = useState('')
    const [message, setMessage] = useState('')

    const inputPhoneNumberStyle =  phoneNumberIsValid ?  'default-input' : 'is-not-valid-input'
    const inputNameStyle = nameIsValid ? 'default-input' : 'is-not-valid-input'

    const { response, error, isLoading, postData } = usePost();

    const onSubmitMessage = () => {
        let isValid = checkIsValid([nameIsValid,phoneNumberIsValid,messageIsValid])
        if(isValid){
            const data  = {
                'name': name,
                'telNumb': phoneNumber,
                'text': message
            }
    
            postData('http://127.0.0.1:8000/create-message',data)
    
            setName('')
            setPhonenumber('')
            setMessage('')
            setFormIsValid(true)
        }
        else {
            setFormIsValid(false)
            setTimeout(() => {
                setFormIsValid(true)
            }, 5000);
        }
    }

    return (
        <form action="">
            {formIsValid || <motion.div animate={{opacity:0}} transition={{duration:5}} className="err-component-wrapper"><ErrComponent text={'In red fields incorrect data'}/></motion.div>}
            <div className="input-wrapper"><input onChange={(e) => validOnlyChar(handleOnChange,setName,e.target.value,1,20,setNameIsValid)} className={inputNameStyle} value={name} placeholder={'Your name'} type="text"/></div>
            <div className="input-wrapper"><input onChange={(e) => validOnlyNumb(handleOnChange,setPhonenumber,e.target.value,10,10,setPhonenumberIsValid)} className={inputPhoneNumberStyle} value={phoneNumber} placeholder={'Your telephone number'} type="number"/></div>
            <div className="input-wrapper"><textarea onChange={(e) => handleOnChange(setMessage, e.target.value,1,500,setMessageIsValid)} className='text-area default-input' value={message} placeholder={'Your text'} ></textarea></div>
            <div className="form-btn-wrapper small-margin" onClick={onSubmitMessage}>
                <Button text={'Send'}/>
            </div>
        </form>
    )
}

export default MessageForm  