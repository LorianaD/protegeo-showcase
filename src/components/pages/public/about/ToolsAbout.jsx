import { aboutTools } from "../../../../data";
import { Button, ItemCard, SectionContainer } from "@/components";

function ToolsAbout() {
    return (
        <SectionContainer id={aboutTools.id} title={aboutTools.title} variant="left">
            <ItemCard
                lists={aboutTools.lists}
            />
            <Button 
                to={aboutTools.btnLink} 
                label={aboutTools.btnLabel} 
                variant="primary"
            />
        </SectionContainer>
    )
}

export default ToolsAbout;