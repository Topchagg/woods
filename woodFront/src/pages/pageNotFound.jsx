import Button from '../components/button'

import '../styles/pages/pageNotFound.css'

const NotFound = () => {
    return (
        <div className="page-not-found-wrapper  default-padding">
            <div className="err-text 404-title-wrapper">
                404
            </div>
            <div className="title text-center">
                Woops
            </div>
            <div className="title text-center default-margin ">
                Oh, you must be lost, there is no such page.
            </div>
            <div className="btn-wrapper default-margin">
                <Button text={'Go home'} link={'/'} />
            </div>
        </div>
    )
}

export default NotFound