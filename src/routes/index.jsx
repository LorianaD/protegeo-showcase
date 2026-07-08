import { Route, Routes } from "react-router";
import AuthRoutes from "./AuthRoutes";
import PublicRoutes from "./publicRoutes";
import GuidesRoutes from "./GuidesRoutes";
import DashboardRoutes from "./DashboardRoutes";
import { ProtectedRoute } from "./guards";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/guides/*" element={<GuidesRoutes />} />
            <Route path="/*" element={<PublicRoutes />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard/*" element={<DashboardRoutes />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;