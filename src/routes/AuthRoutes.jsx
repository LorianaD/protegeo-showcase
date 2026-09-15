import { Route, Routes } from "react-router";
import { MainLayout } from "../components";
import { Login, Register } from "../pages/auth";
import { GuestRoute } from "./guards";

function AuthRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route element={<GuestRoute />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AuthRoutes;