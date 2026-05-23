import { aboutPurpose } from "@/data";
import { ItemCard, PrimaryButton, SectionContainer } from "@/components";

function PurposeAbout() {
    return (
        <SectionContainer id={aboutPurpose.id} title={aboutPurpose.title} variant="left">
            <ItemCard
                description={aboutPurpose.description}
            />
            <PrimaryButton to={aboutPurpose.btnLink}>
                { aboutPurpose.btnLabel }
            </PrimaryButton>
        </SectionContainer>
    )
}

export default PurposeAbout;