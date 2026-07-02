import { DashboardMainLayout } from "@/components";
import { Account, Budget, Dashboard, FinancialManagement, Inventory, ProtectedPersons, ProtectedProfile, UserProfile } from "@/pages/dashboard";
import { Route, Routes } from "react-router";

function DashboardRoutes() {
    return (
        <Routes>
            <Route element={<DashboardMainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/protected-persons" element={<ProtectedPersons />} />
                <Route path="/financial" element={<FinancialManagement />} />
                <Route path="/protected-profile" element={<ProtectedProfile />} />
                <Route path="/budget" element={<Budget />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/account" element={<Account />} />
                <Route path="/profile" element={<UserProfile />} />
            </Route>
        </Routes>
    )
}

export default DashboardRoutes;