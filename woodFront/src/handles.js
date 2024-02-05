import { updateImg,deleteImg } from "./firebase/firebaseScripts"


export const handleOnChange = (setFunc,value, minLength, maxLength, setIsValid) => {
    if(value.length > maxLength){
        
    }
    else if( value.length < minLength) {
        setFunc(value)
        setIsValid(false) 
    }
    else {
       setFunc(value)
       setIsValid(true)
    }
}

export const handleOnChangeImg = async (e,setFunc,oldImg,folderName, setDownload) => {
    console.log(e.target.files[0])
    const newImg = await updateImg(oldImg,e.target.files[0],folderName, setDownload)
    if(newImg){
        setFunc(newImg)
    }
}

export const handleOnDelete = async (deleteFunc, url, image) => {
    await deleteImg(image)
    await deleteFunc(url)
}   