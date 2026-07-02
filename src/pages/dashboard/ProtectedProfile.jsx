import { HeroDashboard, Main, SectionOverviewContainer, TabsDashboard } from "@/components";
import { protectedProfileDashboard } from "@/data";

function ProtectedProfile() {
    const page = protectedProfileDashboard;
    const variantClass = "dashboard";
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={ page }/>
                <TabsDashboard page={ page }/>                
            </SectionOverviewContainer>

        </Main>
    )
}

export default ProtectedProfile;