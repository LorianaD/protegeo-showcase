import { HeroDashboard, Main, ProtectedPersonsDashboard, SectionOverviewContainer } from "@/components";
import { protectedPersonsDashboard } from "@/data";

function ProtectedPersons() {
    const page = protectedPersonsDashboard;
    const variantClass = "dashboard";
    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={page} />
                <ProtectedPersonsDashboard page={page}/>
            </SectionOverviewContainer>
        </Main>
    )
}

export default ProtectedPersons;