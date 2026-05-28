import { SectionBand, SectionContainer, ShortcutCard } from "@/components/ui";
import { accountManagementGuideSteps } from "@/data";

function StepsAccountManagementGuide() {
    const section = accountManagementGuideSteps;
    return (
        <SectionContainer variant="withoutborder">
            <SectionBand 
                img={section.img} 
                title={section.title}
                iconColor={"light-blue"}
                sign={section.sign}
            />
            <div className="steps-guide__cards">
                {section.items.map((item) => (
                    <ShortcutCard
                        key={item.title}
                        icon={item.number}
                        iconColor={item.iconColor}
                        title={item.title}
                        description={item.description}
                        variant={"guide"}
                    />
                ))}                
            </div>

        </SectionContainer>
    )
}

export default StepsAccountManagementGuide;