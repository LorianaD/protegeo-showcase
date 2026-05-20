import { templatesOther } from "../../../data";
import { ItemCard, SectionContainer } from "../../ui";

function OtherTemplates() {
    return (
        <SectionContainer title={templatesOther.title}>
            <ItemCard
                lists={templatesOther.lists}
            />
        </SectionContainer>
    )
}

export default OtherTemplates;