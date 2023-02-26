import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import SingleCmt from "./SingleCmt"

export default function CmtShow({ dweet_id }) {
    const user = localStorage.getItem('user')
    const id = JSON.parse(user).id
    useEffect(() => {
        fetch('/api/dweets/comment/', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dweet_id: dweet_id })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCmts(data)
            })
            .catch((error) => {
                console.log(error)
            })
    })

    const [cmts, setCmts] = useState([])
    const [commt, setCommt] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
        console.log(commt)
        fetch('/api/dweets/comment/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dweet_id: dweet_id, comment: commt, id: id })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCommt('')
            })
    }

    return (
        <>
            <form className="container row text-center p-4" >
                <textarea className="col rounded" value={commt} onChange={e => setCommt(e.target.value)} placeholder="Enter your Comment" name="cmt" id="" rows="2"></textarea>
                <button className="col-1 p-2 btn btn-primary btn-sm ms-2 my-2" onClick={handleClick}><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
            <div className="container text-center ms-5" >
                {cmts && cmts.map((cmt) => (
                    <SingleCmt cmt={cmt} />
                ))}
            </div>
        </>
    )
}