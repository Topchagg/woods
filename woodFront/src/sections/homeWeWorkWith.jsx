import Wood from '../components/wood'

import '../styles/sections/HomeWeWorkWith.css'

const HomeWeWorkWith = () => {
    return (
        <div className="section default-background">
            <div className="content-container">
                <div className="we-work-with-wrapper section-margin">
                    <div className="we-work-with-title title">
                        The wood we work with
                    </div>
                    <div className="woods-wrapper">
                        <Wood name={'Oak'}/>
                        <Wood name={'Oak'}/>
                        <Wood name={'Oak'}/>
                        <Wood name={'Oak'}/>
                        <Wood name={'Oak'}/>
                        <Wood name={'Oak'}/>
                        <Wood name={'Oak'}/>
                        <Wood name={'Oak'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeWeWorkWith