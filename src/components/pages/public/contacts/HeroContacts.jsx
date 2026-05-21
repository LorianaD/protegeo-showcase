import { contactHero as hero } from "@/data";
import { SectionHeroContainer } from "@/components/ui";

function HeroContacts() {
    return (
        <SectionHeroContainer 
            variant="public" 
            title={hero.title} 
            description={hero.description}
        />
    )
}

export default HeroContacts;