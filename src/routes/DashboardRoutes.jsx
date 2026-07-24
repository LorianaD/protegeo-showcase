import { DashboardMainLayout } from "@/components";
import { Account, Budget, Dashboard, FinancialManagement, Inventory, ProtectedPersons, UserProfile } from "@/pages/dashboard";
import { Route, Routes } from "react-router";
import { ProtectedProfileRoutes } from "./dashboard";

function DashboardRoutes() {
    return (
        <Routes>
            <Route element={<DashboardMainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/protected-persons" element={<ProtectedPersons />} />
                <Route path="/financial/:reference" element={<FinancialManagement />} />
                <Route path="/protected-profile/:reference/*" element={<ProtectedProfileRoutes />} />
                <Route path="/budget/:reference" element={<Budget />} />
                <Route path="/inventory/:reference" element={<Inventory />} />
                <Route path="/account/:reference" element={<Account />} />
                <Route path="/profile" element={<UserProfile />} />
            </Route>
        </Routes>
    )
}

export default DashboardRoutes;