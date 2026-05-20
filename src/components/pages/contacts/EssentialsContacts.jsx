import { contactEssentials } from "../../../data";
import { ItemCard, SectionContainer } from "../../ui";

function EssentialsContacts() {
    return (
        <SectionContainer title={contactEssentials.title}>
            <ItemCard
                description={contactEssentials.description}
                lists={contactEssentials.contacts}
                conclusion={contactEssentials.conclusion}
            />
        </SectionContainer>
    );
}

export default EssentialsContacts;