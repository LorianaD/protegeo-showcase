import { templatesBanks } from "../../../data";
import { ItemCard, SectionContainer } from "../../ui";

function BanksTemplates() {
    return (
        <SectionContainer title={templatesBanks.title}>
            <ItemCard
                lists={templatesBanks.lists}
            />
        </SectionContainer>
    )
}

export default BanksTemplates;