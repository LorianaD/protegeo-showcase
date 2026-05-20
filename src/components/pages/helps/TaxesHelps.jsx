import { taxes } from "../../../data/helpsPage";
import { ItemCard, SectionContainer } from "../../ui";

function TaxesHelps() {
    return (
        <SectionContainer title={taxes.title}>
            <ItemCard
                lists={taxes.lists}
                infos={taxes.infos}
            />
        </SectionContainer>
    )
}

export default TaxesHelps;