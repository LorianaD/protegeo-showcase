import { SectionContainer , Button } from "@/components/ui";
import { homeCafPaymentData } from "@/data";

function CafPaymentHome() {
    return(
        <SectionContainer title={ homeCafPaymentData.title }>
                <ul className="caf-payment__list">
                    <li className="caf-payment__item">
                        { homeCafPaymentData.item1 }
                    </li>
                    <li className="caf-payment__item">
                        { homeCafPaymentData.item2 }
                    </li>
                    <li className="caf-payment__item">
                        { homeCafPaymentData.item3 }
                    </li>
                </ul>
                <Button label={ homeCafPaymentData.btn } href={ homeCafPaymentData.link } variant="primary"/>
        </SectionContainer>
    )
}

export default CafPaymentHome;