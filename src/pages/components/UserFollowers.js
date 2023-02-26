import { Link } from "react-router-dom"

export default function UserFollowers({followers}){
    console.log("Followers dweet :", followers)
    return(
        <>
            <Link className="text-decoration-none" onClick={localStorage.setItem('username', followers.user)} to={`/user/${followers.user_id}`}>{followers.user}</Link>
        </>
    )
}