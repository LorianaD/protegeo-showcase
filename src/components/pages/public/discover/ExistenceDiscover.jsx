import { ItemCard, SectionContainer } from "@/components/ui";
import { discoverExistence } from "@/data";

function ExistenceDiscover() {
    const section = discoverExistence;
    return (
        <SectionContainer title={section.title} variant="blue">
            <ItemCard
                description={section.description}
            />
        </SectionContainer>
    )
}

export default ExistenceDiscover;