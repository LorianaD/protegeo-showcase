import { Main, SectionHeroContainer, SectionLegal } from "@/components";
import { sitemapHero, sitemapSections } from "@/data";

function Sitemap() {
    return (
        <Main variant="legal">
            <SectionHeroContainer title={sitemapHero.title} description={sitemapHero.description}/>
            {sitemapSections.map((section, index) => (
                <SectionLegal key={index} data={section}/>
            ))}
        </Main>
    )
}

export default Sitemap;