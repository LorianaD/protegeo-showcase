import { PrimaryButton, SectionContainer } from "@/components/ui";
import { faqSupport } from "@/data";

function SupportFaq() {
    return (
        <SectionContainer title={faqSupport.title} description={faqSupport.description} variant="blue">
            <div className="button-container">
                {faqSupport.btns.map((btn)=>(
                    <PrimaryButton key={btn.btnLabel} to={btn.btnLink}>
                        {btn.btnLabel}
                    </PrimaryButton>
                ))}
            </div>
        </SectionContainer>
    )
}

export default SupportFaq;