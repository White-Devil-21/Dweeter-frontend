import { Link } from "react-router-dom";

export default function SingleCmt({cmt}){
    return(
        <>
            <div className="border rounded p-2 w-75 my-2" style={{height: 60}}>
                <Link className="fs-sm ms-1 fw-lighter float-start text-decoration-none" to={`/user/${cmt.dweet_id}`}>{cmt.user}</Link>
                <p className="mt-2 me-5 text-center">{cmt.commnt}</p>
            </div>
        </>
    )
}