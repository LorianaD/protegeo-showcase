import { InfoWarning } from "@/components/ui";
import { accountManagementGuideWarning } from "@/data";

function WarningAccountManagement() {
    const section = accountManagementGuideWarning;
    return (
        <InfoWarning
            img={section.img}
            description={section.description}
        />
    )
}

export default WarningAccountManagement;