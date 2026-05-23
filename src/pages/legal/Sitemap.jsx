import { Main, SectionHeroContainer, SectionLegal } from "@/components";
import {  } from "@/data";
import { sitemapHero, sitemapSections } from "@/data/pages/legal/sitemapPage";

function PrivacyPolicy() {
    return (
        <Main variant="legal">
            <SectionHeroContainer title={sitemapHero.title} description={sitemapHero.description}/>
            {sitemapSections.map((section, index) => (
                <SectionLegal key={index} data={section}/>
            ))}
        </Main>
    )
}

export default PrivacyPolicy;