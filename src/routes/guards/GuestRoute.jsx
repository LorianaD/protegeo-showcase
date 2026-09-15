import { isAuthenticated } from "@/services";
import { Navigate, Outlet } from "react-router";

function GuestRoute() {
    if (isAuthenticated()) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
}

export default GuestRoute;