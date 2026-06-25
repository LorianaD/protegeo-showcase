import { Route, Routes } from "react-router";
import AuthRoutes from "./AuthRoutes";
import PublicRoutes from "./publicRoutes";
import GuidesRoutes from "./GuidesRoutes";
import DashboardRoutes from "./DashboardRoutes";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/guides/*" element={<GuidesRoutes />} />
            <Route path="/*" element={<PublicRoutes />} />
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
        </Routes>
    );
}

export default AppRoutes;