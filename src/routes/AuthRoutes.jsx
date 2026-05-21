import { Route, Routes } from "react-router";
import { MainLayout } from "../components";
import { Login, Register } from "../pages/auth";

function AuthRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
            </Route>
        </Routes>
    )
}

export default AuthRoutes;