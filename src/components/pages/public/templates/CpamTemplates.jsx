import { templatesCpam } from "@/data";
import { ItemCard, SectionContainer } from "@/components/ui";

function CpamTemplates() {
    return (
        <SectionContainer title={templatesCpam.title}>
            <ItemCard
                lists={templatesCpam.lists}
            />
        </SectionContainer>
    )
}

export default CpamTemplates;