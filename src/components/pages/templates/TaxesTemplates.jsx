import { templatesTaxes } from "../../../data";
import { ItemCard, SectionContainer } from "../../ui";

function TaxesTemplates() {
    return (
        <SectionContainer title={templatesTaxes.title}>
            <ItemCard
                lists={templatesTaxes.lists}
            />
        </SectionContainer>
    )
}

export default TaxesTemplates;