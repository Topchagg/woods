import { useState } from 'react'
import MessageForm from '../components/messageForm'

import '../styles/sections/formSection.css'

const FormSection = () => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhonenumber] = useState('')
    const [message, setMessage] = useState('')

    return (
        <div className="home-form-section section default-background default-padding">
            <div className="content-container">
                <div className="question-section default-margin">
                    <div className="title">
                        Any question?
                    </div>
                    <div className="form-text-wrapper">
                        <div className="form-wrapper" id={'message-form'}>
                            <MessageForm/>
                        </div>
                        <div className="text-other-wrapper">
                            <div className="text-wrapper small-margin main-text">
                                Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.
                            </div>
                            <div className="form-img-wrapper">
                                <img className='oak' src="oakInForm.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  FormSection