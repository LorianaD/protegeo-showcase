import { taxes } from "../../../data/templatesPage";
import { ItemCard, SectionContainer } from "../../ui";

function TaxesTemplates() {
    return (
        <SectionContainer title={taxes.title}>
            <ItemCard
                lists={taxes.lists}
            />
        </SectionContainer>
    )
}

export default TaxesTemplates;