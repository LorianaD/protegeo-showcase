import { measureProtectedPersonneRights } from "@/data";
import { SectionContainer, ItemCard } from "@/components/ui";

function ProtectedPersonneRightsMeasure() {
    return (
        <SectionContainer title={measureProtectedPersonneRights.title}>
            <ItemCard
                lists={[
                    {
                        title: measureProtectedPersonneRights.description.title,
                        items: measureProtectedPersonneRights.description.items,
                    },
                ]}
                conclusion={measureProtectedPersonneRights.description.conclusion}
            />
        </SectionContainer>
    )
}

export default ProtectedPersonneRightsMeasure;
