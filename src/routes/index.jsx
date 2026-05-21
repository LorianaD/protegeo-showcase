import { Route, Routes } from "react-router";
import AuthRoutes from "./AuthRoutes";
import PublicRoutes from "./PublicRoutes";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<PublicRoutes />} />
        </Routes>
    );
}

export default AppRoutes;