import { useEffect, useState } from 'react'
import DweetShow from './components/DweetShow'
import Dweetbox from './Dweetbox'

export default function Home() {
    const [dweets, setDweets] = useState([])

    useEffect(() => {
        fetch('/api/dweets/')
            .then((response) => response.json())
            .then((data) => {
                setDweets(data)
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
            </div>
        </>
    )
}