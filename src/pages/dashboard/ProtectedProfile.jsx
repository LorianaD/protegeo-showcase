import { HeroDashboard, Main, SectionOverviewContainer, TabsDashboard } from "@/components";
import { protectedProfileDashboard } from "@/data";
import { getDossierIdByReference } from "@/utils";
import { Outlet, useParams } from "react-router";

function ProtectedProfile() {
    const page = protectedProfileDashboard;
    const variantClass = "dashboard";

    const { reference } = useParams();
    // console.log(reference);

    const dossierId = getDossierIdByReference(reference);
    // console.log(dossierId);

    return (
        <Main variant={ variantClass }>
            <SectionOverviewContainer>
                <HeroDashboard page={ page }/>
                <TabsDashboard page={ page } />
                <Outlet context={{ page, dossierId }}/>  
            </SectionOverviewContainer>

        </Main>
    )
}

export default ProtectedProfile;