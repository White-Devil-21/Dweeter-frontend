import { useState } from "react"
import { useSignup } from "../hooks/useSignup"


const Signup = () =>{
    const[email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) =>{
        e.preventDefault()

        await signup(email, password)
    }

    return(
        <div style={{height: window.innerHeight}}  >
            <form onSubmit={handleSubmit} >
                <div className="container text-center">
                    <h1 className="mt-4">SIGN UP</h1>
                    <div className="m-4 mb-5 mt-5 fs-3">
                        <label className="ms-1 me-4" htmlFor="email">Email :</label>
                        <input className="ms-5" type="email" onChange={(e)=> setEmail(e.target.value)} value = {email} />
                    </div>
                    <div className="m-4 mb-5 fs-3">
                        <label className="me-4" htmlFor="password">Password :</label>
                        <input type="password" className="" onChange={(e)=> setPassword(e.target.value)} value = {password} />
                    </div>
                    <button className="btn btn-primary fs-3" disabled={isLoading} >SIGN UP</button>
                    { error && <div className="fs-2 mt-4 me-2"  >{error}</div> }
                </div>
            </form>
        </div>
    )
}

export default Signup