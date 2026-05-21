import { helpsTaxes as taxes } from "@/data";
import { ItemCard, SectionContainer } from "@/components/ui";

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
