import { ComplementaryDashboardUserProfile, HeroDashboard, IdentifyDashboardUserProfile, Main, SectionOverviewContainer, UsernameDashboardUserProfile } from "@/components";
import { userProfileDashboard } from "@/data";
import { useUser } from "@/hooks";

function UserProfile() {
    const page = userProfileDashboard;
    const variantClass = "dashboard";
    const {user, loading} = useUser();

    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={ page } />
                <IdentifyDashboardUserProfile page={ page } user={ user } loading={ loading } />
                <ComplementaryDashboardUserProfile page={ page } user={ user } loading={ loading } />
                <UsernameDashboardUserProfile page={ page } user={ user } loading={ loading } />
            </SectionOverviewContainer>
        </Main>
    )
}

export default UserProfile;