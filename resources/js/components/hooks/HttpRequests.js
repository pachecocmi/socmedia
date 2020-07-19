import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function HttpRequests(url, method='get') {
    
    const [result, setResult] = useState({
        loading: true,
        data: null,
        error:false
    })

    async function request() {
        const response = ( method == "post" )
            ? await axios.post(url) : await axios.get(url)
        return response
    }

    useEffect(()=>{
        axios.defaults.withCredentials = true;
        axios.get('/sanctum/csrf-cookie').then(response => {
            request().then(response=>{
                setResult({
                    loading: true,
                    data: response.data
                })
            }).catch(error=>{
                setResult({ loading: false, error: true, data: error });
            });
        });
    }, [url])

    return result
}