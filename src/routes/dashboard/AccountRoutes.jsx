import { SummaryDashboardAccount } from "@/components";
import { Account } from "@/pages/dashboard";
import { Route, Routes } from "react-router";

function AccountRoutes() {
    return (
        <Routes>
            <Route element={<Account />}>
                <Route index element={<SummaryDashboardAccount />} />
                
            </Route>
        </Routes>
    )    
}

export default AccountRoutes;