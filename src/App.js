import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./pages/components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const user = useAuthContext()
  return (
    <>
      <BrowserRouter>
        <div className="bg-light" >
          <Navbar />
          <Routes>
            <Route path="/" element={user.user? <Home /> : <Navigate to='/login' /> } />
            <Route path="/login" element={!user.user ? <Login /> : <Navigate to='/' />} />
            <Route path="/register" element={!user.user ? <Signup /> : <Navigate to='/' />} />
            <Route path="/user/:id" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
