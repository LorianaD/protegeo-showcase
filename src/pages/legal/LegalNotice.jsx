import { Main, SectionHeroContainer, SectionLegal } from "@/components";
import { legalNoticeHero, legalNoticeSections } from "@/data";

function LegalNotice() {
    return (
        <Main variant="legal">
            <SectionHeroContainer title={legalNoticeHero.title}/>
            {legalNoticeSections.map((section, index) => (
                <SectionLegal key={index} data={section}/>
            ))}
        </Main>
    )
}

export default LegalNotice;