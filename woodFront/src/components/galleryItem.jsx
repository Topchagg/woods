import { useState } from 'react'

import { useDelete,usePost } from '../customHooks'

import Button from './button'
import UpdateItemForm from './updateItemForm'

import '../styles/components/GalleryItem.css'

const GalleryItem = (props) => {

    const isAdmin = true

    const [isUpdate,setIsUpdate] = useState(false)
    const {deleteData,isLoading,error} = useDelete()

    const handleOnDelete = (id) => {
        deleteData(id)
    }
    
    if(isUpdate){
        return (
            <div className="product-update-item-wrapper">
                <div className="form-wrapper">
                    <UpdateItemForm {...props} setFunc={setIsUpdate}/>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="product-item-wrapper">
                {isAdmin && 
                <div className="admin-panel-wrapper">
                    <div style={{width:200}} onClick={() => handleOnDelete('http://127.0.0.1:8000/delete-product/' + props.pk)} >
                        <Button text={'Delete'}/>
                    </div>
                    <div style={{width:200}} onClick={() => setIsUpdate(!isUpdate)}>
                        <Button text={'Update'}/>
                    </div>
                </div>
            }
                <div className='img-wrapper'>
                    <img className='img' src={'./kitchen.png'} alt=""/>
                </div>
                <div className="info-item-wrapper">
                    <div className="main-text text-center">
                        {props.name}
                    </div>
                    <div className="main-text text-center">
                        {props.price} $
                    </div>
                </div>
            </div>
        )
    }
}

export default GalleryItem

