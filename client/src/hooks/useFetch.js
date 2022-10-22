import axios from 'axios';
import { useEffect, useState } from 'react';


export const UseFetch = (apiUrl) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)




   useEffect(() => {
    setData(null)
    setError(null)
    setLoading(true)
    axios.get(apiUrl)
        .then(response => setData(response.data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
   },[apiUrl])



   return {data,loading,error}
}
 
