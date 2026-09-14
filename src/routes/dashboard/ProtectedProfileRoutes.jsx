import { FamilyDashboardProtectedProfile, IdentifyDashboardProtectedProfile, JudgmentDashboardProtectedProfile, OrganizationContactsDashboardProtectedProfile, ProfessionalContactsDashboardProtectedProfile } from "@/components";
import { ProtectedProfile } from "@/pages/dashboard";
import { Route, Routes } from "react-router";

function ProtectedProfileRoutes() {
    return (
        <Routes>
            <Route element={<ProtectedProfile />}>
                <Route index element={<IdentifyDashboardProtectedProfile />} />
                <Route path="judgment" element={<JudgmentDashboardProtectedProfile />} />
                <Route path="family" element={<FamilyDashboardProtectedProfile />} />
                <Route path="professional" element={<ProfessionalContactsDashboardProtectedProfile />} />
                <Route path="organization" element={<OrganizationContactsDashboardProtectedProfile />} />
            </Route>
        </Routes>
    )    
}

export default ProtectedProfileRoutes;