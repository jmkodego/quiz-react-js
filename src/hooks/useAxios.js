import { useState, useEffect } from 'react'
import axios from 'axios';

axios.defaults.baseURL = "https://opentdb.com"

function useAxios({ url }) {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = () => {
            axios.get(url)
                .then(function (response) {
                    // handle success
                    setResponse(response.data)
                })
                .catch(function (error) {
                    // handle error
                    setError(error)
                })
                .finally(function () {
                    setLoading(false)
                })
        }


        fetchData()
    }, [url])


    return { response, error, loading }
}

export default useAxios;