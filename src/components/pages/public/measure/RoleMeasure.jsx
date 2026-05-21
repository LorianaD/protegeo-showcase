import { measureRole } from "@/data";
import { SectionContainer, ItemCard } from "@/components/ui";

function RoleMeasure() {
    return (
        <SectionContainer title={measureRole.title}>
            
            <ItemCard
                lists={[
                    {
                        title: measureRole.description.title,
                        items: measureRole.description.items,
                    },
                ]}
                conclusion={measureRole.description.conclusion}
            />
            
        </SectionContainer>
    )
}

export default RoleMeasure;