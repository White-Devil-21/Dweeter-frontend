import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
import CmtShow from "./CmtShow"


export default function DweetShow({dweet}){
    const handleClick = () => {
        setCmtShow(!cmtShow)
    }
    const [cmtShow, setCmtShow] = useState(false)
    return(
        <>
            <div className="container-fluid border rounded border-secondary-subtle bg-gradient my-3 col-1 p-3 w-75" >
                <Link className="text-decoration-none" onClick={localStorage.setItem('username', dweet.user)} to={`/user/${dweet.dweet_id}`}>{dweet.user}</Link>
                <p>{dweet.dweet}</p>
                <button className="btn btn-primary-sm bg-primary btn-sm" onClick={handleClick} ><FontAwesomeIcon className="" icon={faCommentAlt} /></button>
                {cmtShow && <CmtShow dweet_id={dweet.dweet_id} />}
            </div>
        </>
    )
}