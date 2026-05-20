import { contactHero as hero } from "../../../data/pages/contactsPage";
import { SectionHeroContainer } from "../../ui";

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