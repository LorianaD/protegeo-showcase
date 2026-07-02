import { HeroDashboard, Main, SectionOverviewContainer } from "@/components";
import { protectedPersonsDashboard } from "@/data";

function ProtectedPersons() {
    const page = protectedPersonsDashboard;
    const variantClass = "dashboard";
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={page} />
            </SectionOverviewContainer>
        </Main>
    )
}

export default ProtectedPersons;