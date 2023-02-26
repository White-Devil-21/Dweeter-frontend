import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useLogout } from "../../hooks/useLogout";

export default function Navbar(){
    const logout = useLogout()

    return(
        <div className="container-fluid row ms-3 mb-5 text-dark bg-light " style={{width: window.innerWidth}}>
            <Link to='/' className="col-3 mt-4 ms-5" ><FontAwesomeIcon className="display-4 " icon={faUserPlus} /></Link>
            <div className="col-5 mt-3 my-3 text-center">
                <h3 className="display-5 me-5">DWeeter</h3>
            </div>
            <div className="col-2 mt-4 ms-5">
                <button className="btn btn-primary fs-5" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}