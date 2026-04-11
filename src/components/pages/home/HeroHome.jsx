import { SectionHeroContainer } from "../../ui";
import { hero } from "../../../data/homePage.js";

function HeroHome() {
    return(
        <SectionHeroContainer 
            variant="home"
            title={hero.title}
            description={hero.description}
            btn={hero.btn}
            to={hero.link}
        />
    )
}

export default HeroHome;