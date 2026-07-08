import { isAuthenticated } from "@/services";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
    if (!isAuthenticated()) {
        return <Navigate to="/auth/login" replace />;
    }
    return <Outlet />;
}

export default ProtectedRoute;