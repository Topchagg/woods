import { useState } from "react"

import { handleOnChange,handleOnChangeImg } from "../handles"
import { usePost } from "../customHooks"
import { validOnlyChar,validOnlyNumb,checkIsValid } from "../scripts"


import Button from "./button"




const UpdateItemForm = (props) => {

    const [nameIsValid,setNameIsValid] = useState(true)
    const [name,setName] = useState(props.name)
    const[priceIsValid,setPriceIsValid] = useState(true)
    const [price,setPrice] = useState(props.price)
    const [image,setImage] = useState(props.image)
    const [imageIsLoaded, setImageIsLoaded] = useState(true)

    const {postData,isLoading,response,error} = usePost('PUT')


    const handleOnUpdate = async () => {

        const isValid = checkIsValid([nameIsValid,priceIsValid])

        if(isValid && imageIsLoaded){
            const data = {
                'name':name,
                'price':price,
                'image': image
            }
            postData('http://127.0.0.1:8000/update-product/' + props.pk,data)
        }
    }


    const inputPriceStyle =  priceIsValid ?  'default-input' : 'is-not-valid-input'
    const inputNameStyle = nameIsValid ? 'default-input' : 'is-not-valid-input'

    return (
        <form action="">
                <label htmlFor="file-input">
                    <div className="img-input-wrapper text-center main-text">
                        {imageIsLoaded && <>Image</> || <>Loading...</>}
                        <input className="to-hide" id="file-input" type="file" onChange={(e) => handleOnChangeImg(e,setImage,image,'product-images/',setImageIsLoaded)} />
                    </div>      
                </label>
            <input className={inputNameStyle} placeholder="Name of product" type="text" value={name} onChange={(e) => validOnlyChar(handleOnChange,setName,e.target.value,2,20,setNameIsValid)} />
            <input className={inputPriceStyle} placeholder="Price of product" type="text" value={price} onChange={(e) => validOnlyNumb(handleOnChange,setPrice,e.target.value,1,5,setPriceIsValid)} />
            <div className="buttons-wrapper flex-container small-margin" >
                <div style={{width:250}} onClick={() => props.setFunc(false)}>
                    <Button text={'Decline'}/>
                </div>
                <div style={{width:250}} onClick={() => handleOnUpdate()}>
                    <Button text={'Submit'} />
                </div>
            </div>
        </form>
    )
}

export default UpdateItemForm