import { protectedPersonneRights } from "../../../data/measurePage";
import { SectionContainer, ItemCard } from "../../ui";

function ProtectedPersonneRightsMeasure() {
    return (
        <SectionContainer title={protectedPersonneRights.title}>
            <ItemCard
                lists={[
                    {
                        title: protectedPersonneRights.description.title,
                        items: protectedPersonneRights.description.items,
                    },
                ]}
                conclusion={protectedPersonneRights.description.conclusion}
            />
        </SectionContainer>
    )
}

export default ProtectedPersonneRightsMeasure;
