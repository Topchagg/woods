import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url)
                const result = await response.json();
                setData(result);
            }
            catch (error) {
                setError(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData();
    },[url])
    return {data,loading,error}
}

export const useToggle = (initState) => {
    const [state, setState] = useState(initState)
    
    const toggle = () => {
        setState((prevValue) => !prevValue)
    }

    return [state, toggle];
}

export const useInput = (initState) => {
    const [state, setState] = useState(initState)
    function handleChange(e) {
        setState(e.target.value)
    }
    return [state,handleChange]
} 

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        },delay);
        return () => {
            clearTimeout(timer);
        }
    },[value])
    return debounceValue
}
