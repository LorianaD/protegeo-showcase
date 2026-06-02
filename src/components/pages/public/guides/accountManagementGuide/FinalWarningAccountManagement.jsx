import { InfoWarning } from "@/components/ui";
import { accountManagementGuideWarningFinal } from "@/data";

function FinalWarningAccountManagement() {
    const section = accountManagementGuideWarningFinal;
    return (
        <InfoWarning
            icon={section.icon}
            iconColor={section.iconColor}
            title={section.title}
            description={section.description}
            variant={section.warningColor}
        />
    )
};

export default FinalWarningAccountManagement;