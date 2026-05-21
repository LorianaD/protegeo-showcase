import { aboutTools } from "../../../../data";
import { ItemCard, PrimaryButton, SectionContainer } from "../../../ui";

function ToolsAbout() {
    return (
        <SectionContainer id={aboutTools.id} title={aboutTools.title} variant="left">
            <ItemCard
                lists={aboutTools.lists}
            />
            <PrimaryButton to={aboutTools.btnLink}>
                {aboutTools.btnLabel}
            </PrimaryButton>
        </SectionContainer>
    )
}

export default ToolsAbout;