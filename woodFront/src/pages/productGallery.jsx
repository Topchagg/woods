import { useParams } from "react-router-dom"

import { useFetch } from "../customHooks"
import Grid from "../components/Grid"
import GalleryItem from "../components/galleryItem"


const ProductGallery = () => {

    const {name} = useParams()

    const {data,loading,error} = useFetch(`http://127.0.0.1:8000/all-${name}`)

    if(loading === false){
        return (
            <div className="product-galler-wrapper default-padding default-background">
               <div className="title text-center default-margin">
                    {name}
               </div>
               <div className="default-margin">
                    <Grid Component={GalleryItem} data={data} />
               </div>
            </div>
        )
    }
}

export default ProductGallery