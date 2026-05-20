import { banks } from "../../../data/templatesPage";
import { ItemCard, SectionContainer } from "../../ui";

function BanksTemplates() {
    return (
        <SectionContainer title={banks.title}>
            <ItemCard
                lists={banks.lists}
            />
        </SectionContainer>
    )
}

export default BanksTemplates;