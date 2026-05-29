import { InfoWarning, SectionContainer } from "@/components/ui";
import { contactUsImportant } from "@/data";

function ImportantContactUs() {
    return (
        <SectionContainer variant="blue">
            <InfoWarning
                img={contactUsImportant.img}
                description={contactUsImportant.description}
                variant="large"
            />
        </SectionContainer>
    )
}

export default ImportantContactUs;