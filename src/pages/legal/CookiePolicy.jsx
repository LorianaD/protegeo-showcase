import { Main, SectionHeroContainer, SectionLegal } from "@/components";
import { cookiesPolicy } from "@/data";

function CookiePolicy() {
    return (
        <Main variant="legal">
            <SectionHeroContainer title={cookiesPolicy.hero.title} description={cookiesPolicy.hero.description}/>
            {cookiesPolicy.sections.map((section, index) => (
                <SectionLegal key={index} data={section}/>
            ))}
        </Main>
    )
}

export default CookiePolicy;