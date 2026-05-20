import { mdph } from "../../../data/templatesPage";
import { ItemCard, SectionContainer } from "../../ui";

function MdphTemplates() {
    return (
        <SectionContainer title={mdph.title}>
            <ItemCard
                lists={mdph.lists}
            />
        </SectionContainer>
    )
}

export default MdphTemplates;