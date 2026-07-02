import { HeroDashboard, Main, SectionOverviewContainer } from "@/components";
import { budgetDashboard } from "@/data";

function Budget() {
    const page = budgetDashboard;
    const variantClass = "dashboard";
    return (
        <Main variant={variantClass}>
            <SectionOverviewContainer>
                <HeroDashboard page={page} />
            </SectionOverviewContainer>
        </Main>
    )
}

export default Budget;