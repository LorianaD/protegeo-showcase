import { role } from "../../../data/measurePage";
import { SectionContainer, ItemCard } from "../../ui";

function RoleMeasure() {
    return (
        <SectionContainer title={role.title}>
            
            <ItemCard
                lists={[
                    {
                        title: role.description.title,
                        items: role.description.items,
                    },
                ]}
                conclusion={role.description.conclusion}
            />
            
        </SectionContainer>
    )
}

export default RoleMeasure;