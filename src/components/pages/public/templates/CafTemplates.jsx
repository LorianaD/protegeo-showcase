import { templatesCaf } from "@/data";
import { ItemCard, SectionContainer } from "@/components/ui";

function CafTemplates() {
    return (
        <SectionContainer title={templatesCaf.title}>
            <ItemCard
                lists={templatesCaf.lists}
            />
        </SectionContainer>
    )
}

export default CafTemplates;