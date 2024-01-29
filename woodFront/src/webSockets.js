export const fetchData = async (url,setFunc) => {
    let isLoading = true
    try{
        const response = await fetch(url)
        const result = await response.json();
        setFunc(result)
        console.log(result)
    }
    catch (error) {
        
    }
    finally {
        isLoading = false
    }
    return null
}