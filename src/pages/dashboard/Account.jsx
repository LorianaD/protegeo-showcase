import { Main, HeroDashboard, SectionOverviewContainer, TabsDashboard } from "@/components";
import { accountDashboard } from "@/data";

function Account() {
    const page = accountDashboard;
    const variantClass = "dashboard";
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={ page } />
                <TabsDashboard page={ page } />
            </SectionOverviewContainer>
        </Main>
    )
}

export default Account;