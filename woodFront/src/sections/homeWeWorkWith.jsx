import { useEffect,useState } from 'react'

import { useIsUpdateHashMemo } from '../store'

import Wood from '../components/wood'

import '../styles/sections/HomeWeWorkWith.css'



const HomeWeWorkWith = () => {

    const {isUpdate} = useIsUpdateHashMemo()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState('')


    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('woods')))
        setIsLoading(false)
    },[isUpdate])

    if(isLoading === false){
        return (
            <div className="section default-background">
                <div className="content-container">
                    <div className="we-work-with-wrapper section-margin">
                        <div className="we-work-with-title title">
                            The wood we work with
                        </div>
                        <div className="woods-wrapper">
                           {data.map((wood,index) => {
                            return <Wood key={index} {...wood}/>
                           })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeWeWorkWith