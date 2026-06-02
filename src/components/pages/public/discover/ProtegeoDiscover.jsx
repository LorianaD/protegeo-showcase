import { SectionContainer } from "@/components/ui";
import { discoverProtegeo } from "@/data";
import DiscoverBlock from "./DiscoverBlock";

function ProtegeoDiscover() {
    const section = discoverProtegeo;
    return (
        <SectionContainer variant="blue">
            <DiscoverBlock 
                title={section.title}
                description={section.description}
                screenshot={section.screenshot}
                alt="Page d'accueil de Protégéo"
            />
        </SectionContainer>
    )
}

export default ProtegeoDiscover;