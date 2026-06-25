import { HeroDashboardProtectedProfile, Main, NavDashboardProtectedProfile, SectionOverviewContainer } from "@/components";

function ProtectedProfile() {
    return (
        <Main variant="dashboard">
            <SectionOverviewContainer>
                <HeroDashboardProtectedProfile/>
                <NavDashboardProtectedProfile/>                
            </SectionOverviewContainer>

        </Main>
    )
}

export default ProtectedProfile;