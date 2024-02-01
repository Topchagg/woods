import { useEffect, useState } from 'react'


import { useIsUpdateHashMemo } from '../store'

import OurWorkComponent from '../components/ourWorkComponent'
import Carousel from '../components/carousel'

const HomeOurWork = () => {

    const {isUpdate} = useIsUpdateHashMemo()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState('')

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('products')))
        setIsLoading(false)
    },[isUpdate])

    if(isLoading === false){
        return (
            <div className="section default-background">
                <div className="content-container">
                    <div className="example-our-work section-margin">
                        <div className="title text-center">
                            Our Work
                        </div>
                        <div className="carousel-wrapper default-margin">
                            <Carousel Component={OurWorkComponent} data={data} />
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default HomeOurWork