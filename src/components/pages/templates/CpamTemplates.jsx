import { cpam } from "../../../data/templatesPage";
import { ItemCard, SectionContainer } from "../../ui";

function CpamTemplates() {
    return (
        <SectionContainer title={cpam.title}>
            <ItemCard
                lists={cpam.lists}
            />
        </SectionContainer>
    )
}

export default CpamTemplates;