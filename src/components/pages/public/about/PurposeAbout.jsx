import { aboutPurpose } from "@/data";
import { Button, ItemCard, SectionContainer } from "@/components";

function PurposeAbout() {
    return (
        <SectionContainer id={aboutPurpose.id} title={aboutPurpose.title} variant="left">
            <ItemCard
                description={aboutPurpose.description}
            />
            <Button 
                to={aboutPurpose.btnLink} 
                label={aboutPurpose.btnLabel} 
                variant="primary"
            />
        </SectionContainer>
    )
}

export default PurposeAbout;