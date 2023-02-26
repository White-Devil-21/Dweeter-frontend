import { useEffect, useState } from "react"

export default function useDweets() {
    const [dweets, setDweets] = useState([])

    useEffect(() => {
        fetch('/api/dweets/')
            .then((response)=>response.json())
            .then((data)=>{
                setDweets(data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }, [])

    return dweets
}