import { Button, SectionContainer } from "@/components/ui";
import { faqSupport } from "@/data";

function SupportFaq() {
    return (
        <SectionContainer title={faqSupport.title} description={faqSupport.description} variant="blue">
            <div className="button-container">
                {faqSupport.btns.map((btn)=>(
                    <Button 
                        key={btn.btnLabel} 
                        to={btn.btnLink} 
                        label={btn.btnLabel} 
                        variant="primary"
                    />
                ))}
            </div>
        </SectionContainer>
    )
}

export default SupportFaq;