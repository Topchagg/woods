import { useState } from "react"
import { handleOnChange} from "../handles"


import Button from "./button"

const MessageForm = () => {

    const [name, setName] = useState('')
    const [phoneNumber, setPhonenumber] = useState('')
    const [message, setMessage] = useState('')

    return (
        <form action="">
            <div className="input-wrapper"><input onChange={(e) => handleOnChange(setName,e.target.value,50)} className='default-input input' value={name} placeholder={'Your name'} type="text"/></div>
            <div className="input-wrapper"><input onChange={(e) => handleOnChange(setPhonenumber,e.target.value,13)} className='default-input input' value={phoneNumber} placeholder={'Your telephone number'} type="text"/></div>
            <div className="input-wrapper"><textarea onChange={(e) => handleOnChange(setMessage, e.target.value,500)} className='text-area default-input' value={message} placeholder={'Your text'} ></textarea></div>
            <div className="form-btn-wrapper small-margin">
                <Button text={'Send'}/>
            </div>
        </form>
    )
}

export default MessageForm