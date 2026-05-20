import { other } from "../../../data/templatesPage";
import { ItemCard, SectionContainer } from "../../ui";

function OtherTemplates() {
    return (
        <SectionContainer title={other.title}>
            <ItemCard
                lists={other.lists}
            />
        </SectionContainer>
    )
}

export default OtherTemplates;