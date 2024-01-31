import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
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

/**
 *  only POST or PUT method !!!!!!!!!!
 * @param {string} method 
* 
 */
export const usePost = (method) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(' ');
  
    async function postData(url, data) {
      setIsLoading(true);
  
      const requestOptions = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
  
      try {
        const res = await fetch(url, requestOptions);
        const result = await res.json();
        setResponse(result);
      } 
      finally {   
        if(res.ok === false) {
            setError(!res.ok)
        }
        else {
            setError(!res.ok)
        }
        setIsLoading(false);
      }
    }
  
    return { postData, isLoading, response, error };  
  }

export const useDelete = () => {
  const[isLoading,setIsLoading] = useState(true)
  const[error,setError] = useState(false)

  const deleteData = async (url) => {
    try {
      await fetch(url)
    }
    catch(e){
      setError(e)
    }
    finally {
      setIsLoading(false)
    }
  }

  return {deleteData,isLoading,error}
}

