import { Main, SectionHeroContainer, SectionLegal } from "@/components";
import { privacyPolicyHero, privacyPolicySections } from "@/data";

function PrivacyPolicy() {
    return (
        <Main variant="legal">
            <SectionHeroContainer title={privacyPolicyHero.title} description={privacyPolicyHero.description}/>
            {privacyPolicySections.map((section, index) => (
                <SectionLegal key={index} data={section}/>
            ))}
        </Main>
    )
}

export default PrivacyPolicy;