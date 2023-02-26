import { useEffect, useState } from 'react'
import DweetShow from './components/DweetShow'
import Dweetbox from './Dweetbox'
// import TrendHashs from './components/TrendHashs'

export default function Home() {
    const [dweets, setDweets] = useState([])
    const [hashtags, setHashtag] = useState([])

    useEffect(() => {
        fetch('/api/dweets/')
            .then((response) => response.json())
            .then((data) => {
                setDweets(data[0])
                setHashtag(data[1])
                console.log(hashtags)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <div className="container-fluid row bg-light text-dark">
                <div className="col-3 "><Dweetbox /></div>
                <div className="col-6 ">
                    {dweets.map((dweet) => (
                        <DweetShow key={dweet.dweet_id} dweet={dweet} />
                    ))}
                </div>
                <div className="col">
                </div>
            </div>
        </>
    )
}