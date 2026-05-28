import { Route, Routes } from "react-router";
import AuthRoutes from "./AuthRoutes";
import PublicRoutes from "./publicRoutes";
import GuidesRoutes from "./GuidesRoutes";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/guides/*" element={<GuidesRoutes />} />
            <Route path="/*" element={<PublicRoutes />} />
        </Routes>
    );
}

export default AppRoutes;