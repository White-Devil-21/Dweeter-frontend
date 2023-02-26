import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import DweetShow from "./components/DweetShow"
import UserFollowers from "./components/UserFollowers"

export default function Profile() {
    const [userDweets, setUserDweets] = useState([])
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [status, setStatus] = useState('Follow')
    const [me , setMe] = useState('')

    const handleClick = () => {
        if (status === 'Follow') {
            fetch('/api/dweets/follow/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id.id })
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setStatus('Unfollow')
                })
        }
        else {
            fetch('/api/dweets/follow/', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id.id })
            }).then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setStatus('Follow')
                })
        }
    }

    let id = useParams()
    const username = localStorage.getItem('username')
    const loc_user = localStorage.getItem('user')
    const user_id = JSON.parse(loc_user).user_id
    console.log(loc_user)
    useEffect(() => {
        console.log(id.id)
        if(user_id === id.id){
            setMe(true)
        }
        else{
            setMe(false)
        }  
        fetch('/api/dweets/user/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id.id })
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
                setUserDweets(data)
                setFollowers(data[1])
                setFollowing(data[0])

            })
    }, [id.id, user_id])
    return (
        <>
            <div className="d-flex justify-content-center mb-4 text-center">
                <h3 className="p-2" >{username}</h3>
                <p className="p-2 mt-2">@{id.id}</p>
                {!me && <button className="btn btn-primary p-2" onClick={handleClick}>{status}</button> }
            </div>
            <div className="container-fluid row">
                <div className="container text-center border rounded border-secondary-subtle col ms-5">
                    <h3 className="my-3">Following</h3>
                    {followers && followers.map((follower) => (
                        <UserFollowers followers={follower} />
                    ))}
                </div>
                <div className="col-7">
                    {userDweets[2] && userDweets[2].map((dweet) => (
                        <DweetShow key={dweet.dweet_id} dweet={dweet} />
                    ))}
                </div>
                <div className="container text-center border rounded border-secondary-subtle col me-5">
                    <h3 className="my-3">Followers</h3>
                    {following && following.map((follower) => (
                        <UserFollowers followers={follower} />
                    ))}
                </div>
            </div>
        </>
    )
}