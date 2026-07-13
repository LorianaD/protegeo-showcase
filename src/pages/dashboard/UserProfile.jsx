import { ComplementaryDashboardUserProfile, HeroDashboard, IdentifyDashboardUserProfile, Main, PasswordDashboardUserProfile, SectionOverviewContainer } from "@/components";
import { userProfileDashboard } from "@/data";
import { useUser } from "@/hooks";

function UserProfile() {
    const page = userProfileDashboard;
    const variantClass = "dashboard";
    const {user, loading, refreshUser} = useUser();

    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={ page } />
                <IdentifyDashboardUserProfile page={ page } user={ user } loading={ loading } refreshUser={refreshUser} />
                <ComplementaryDashboardUserProfile page={ page } user={ user } loading={ loading } refreshUser={refreshUser} />
                <PasswordDashboardUserProfile page={ page } user={ user } loading={ loading } />
            </SectionOverviewContainer>
        </Main>
    )
}

export default UserProfile;