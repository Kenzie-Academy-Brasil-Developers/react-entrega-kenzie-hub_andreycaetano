import { Route, Routes, useNavigate } from "react-router-dom"
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { Dashboard } from "../Pages/Dashboard";
import { useState } from "react";

export const MainRoutes = () => {
    
    const [user, setUser] = useState({})

    return(
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser} user={user}/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser}/>}/>
        </Routes>
    )
}