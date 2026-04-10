import SectionHeroContainer from "../../ui/SectionHeroContainer.jsx";
import { hero } from "../../../data/homePage.js";

function Hero() {
    return(
        <SectionHeroContainer 
            title={hero.title}
            description={hero.description}
            btn={hero.btn}
            to={hero.link}
        />
    )
}

export default Hero