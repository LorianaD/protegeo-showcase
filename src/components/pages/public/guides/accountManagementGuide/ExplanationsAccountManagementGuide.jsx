import { SectionBand, SectionContainer, ShortcutCard, StepsContainer } from "@/components/ui";
import { accountManagementGuideSteps } from "@/data";

function ExplanationsAccountManagementGuide() {
    const section = accountManagementGuideSteps;
    return (
        <SectionContainer variant="withoutborder">
            {section.items.map((item) => (
                <div key={item.title} className="steps-guide__wrapper">
                    <SectionBand 
                        icon={item.number} 
                        title={item.title}
                        iconColor={item.iconColor}
                        sign={item.number}
                    />

                    <StepsContainer
                        questions={item.questions}
                        warning={item.warning}
                        band={item.band}
                        info={item.info}
                        explain={item.explain}
                        footer={item.footer}
                        screenshot={item.screenshot}
                        reminder={item.explain}
                    />
                    
                </div>
            ))}
        </SectionContainer>
    )
}

export default ExplanationsAccountManagementGuide;