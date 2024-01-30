import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { useIsUpdateHashMemo } from "../store"

import Grid from "../components/Grid"
import GalleryItem from "../components/galleryItem"



const ProductGallery = () => {

    const { isUpdate } = useIsUpdateHashMemo();

    const {name} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [data,setData] = useState()

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem(name)))
        setIsLoading(false)
    },[isUpdate])

    if(isLoading === false) {
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