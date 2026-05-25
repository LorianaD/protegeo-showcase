import { InfoWarning, SectionContainer } from "@/components/ui";
import { contactUsImportant } from "@/data";

function ImportantContactUs() {
    return (
        <SectionContainer variant="blue">
            <InfoWarning
                icon={contactUsImportant.icon}
                description={contactUsImportant.description}
                variant="large"
            />
        </SectionContainer>
    )
}

export default ImportantContactUs;