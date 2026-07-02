import { HeroDashboard, IdentifyDashboardUserProfile, Main, SectionOverviewContainer } from "@/components";
import { userProfileDashboard } from "@/data";

function UserProfile() {
    const page = userProfileDashboard;
    const variantClass = "dashboard";
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={ page } />
                <IdentifyDashboardUserProfile page={ page } />                
            </SectionOverviewContainer>
        </Main>
    )
}

export default UserProfile;