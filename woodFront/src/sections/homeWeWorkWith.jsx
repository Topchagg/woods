import ProductExample from '../components/productExample'

import '../styles/sections/HomeWeWorkWith.css'

const HomeWeWorkWith = () => {
    return (
        <div className="section default-background">
            <div className="content-container">
                <div className="we-work-with-wrapper section-margin">
                    <div className="title-wrapper title">
                        The wood we work with
                    </div>
                    <div className="woods-wrapper">
                        <ProductExample name={'Oak'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWeWorkWith