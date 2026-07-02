import { HeroDashboard, Main, SectionOverviewContainer, TabsDashboard } from "@/components";
import { invetoryDashboard } from "@/data";

function Inventory() {
    const page = invetoryDashboard;
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

export default Inventory;