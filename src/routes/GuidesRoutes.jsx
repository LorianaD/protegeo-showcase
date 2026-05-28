import { MainLayout } from "@/components";
import { AccountManagementGuide } from "@/pages/public";
import { Routes, Route } from "react-router";

function GuidesRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="account-management" element={<AccountManagementGuide />}/>
            </Route>
        </Routes>
    )
}

export default GuidesRoutes;