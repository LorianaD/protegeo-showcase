import { caf } from "../../../data/templatesPage";
import { ItemCard, SectionContainer } from "../../ui";

function CafTemplates() {
    return (
        <SectionContainer title={caf.title}>
            <ItemCard
                lists={caf.lists}
            />
        </SectionContainer>
    )
}

export default CafTemplates;