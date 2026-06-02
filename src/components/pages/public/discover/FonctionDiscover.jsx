import { SectionContainer } from "@/components/ui";
import { discoverFonction } from "@/data";
import DiscoverBlock from "./DiscoverBlock";

function FonctionDiscover() {
    const section = discoverFonction;
    return (
        <SectionContainer title={section.title}>
            {section.steps.map((step) => (
                <DiscoverBlock
                    key={step.title}
                    title={step.title}
                    description={step.description}
                    screenshot={step.screenshot}
                    alt={step.title}
                    variant="fonction"
                    format={step.format}
                />
            ))}          
        </SectionContainer>
    )
}

export default FonctionDiscover;