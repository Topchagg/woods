import Button from '../components/button'

import '../styles/sections/formSection.css'

const FormSection = () => {
    return (
        <div className="home-form-section section default-background default-padding">
            <div className="content-container">
                <div className="question-section default-margin">
                    <div className="title">
                        Any question?
                    </div>
                    <div className="form-text-wrapper">
                        <div className="form-wrapper">
                            <form action="">
                                <div className="input-wrapper"><input className='default-input input' placeholder={'Your name'} type="text"/></div>
                                <div className="input-wrapper"><input className='default-input input' placeholder={'Your telephone number'} type="text"/></div>
                                <div className="input-wrapper"><textarea className='text-area default-input' placeholder={'Your text'} ></textarea></div>
                                <div className="form-btn-wrapper small-margin">
                                    <Button text={'Send'}/>
                                </div>
                            </form>
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