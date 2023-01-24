import { useState, useEffect } from "react"

export default function useFetch(url) {
    const [ data, setData ] = useState(null)
    const [ IsPending, setIsPending ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        setTimeout(
            () => {
                fetch(url)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsPending(false)
                })
                .catch((e) => {
                    console.log(e)
                    setError(e.message)
                    setIsPending(false)
                })
            }
        , 500)
    })

    return {data, IsPending, error}
}