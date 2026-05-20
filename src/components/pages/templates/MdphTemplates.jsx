import { templatesMdph } from "../../../data";
import { ItemCard, SectionContainer } from "../../ui";

function MdphTemplates() {
    return (
        <SectionContainer title={templatesMdph.title}>
            <ItemCard
                lists={templatesMdph.lists}
            />
        </SectionContainer>
    )
}

export default MdphTemplates;
