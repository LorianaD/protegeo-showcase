import { SectionHeroContainer } from "@/components/ui";
import { homeHero } from "@/data";

function HeroHome() {
    return(
        <SectionHeroContainer 
            variant="home"
            title={homeHero.title}
            description={homeHero.description}
            btn={homeHero.btn}
            to={homeHero.link}
        />
    )
}

export default HeroHome;