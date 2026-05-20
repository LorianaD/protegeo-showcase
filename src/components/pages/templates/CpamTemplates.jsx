import { templatesCpam } from "../../../data";
import { ItemCard, SectionContainer } from "../../ui";

function CpamTemplates() {
    return (
        <SectionContainer title={templatesCpam.title}>
            <ItemCard
                lists={templatesCpam.lists}
            />
        </SectionContainer>
    )
}

export default CpamTemplates;