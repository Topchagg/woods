import { useParams } from "react-router-dom"

import { useFetch } from "../customHooks"

import Grid from "../components/Grid"

const GalleryPage = (props) => {

    const {name} = useParams()

    const {data,loading,error} = useFetch(`http://127.0.0.1:8000/all-${name}`) 

    return (
        <div className="gallery-page-wrapper default-padding default-background">
            <div className="title text-center default-margin">
                {name}
            </div>
            <div className="grid-wrapper">
                
            </div>
        </div>
    )
}

export default GalleryPage