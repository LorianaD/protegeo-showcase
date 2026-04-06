import SectionContainer from "../ui/SectionContainer.jsx";
import PrimaryButton from "../ui/PrimaryButton.jsx";
import { CafPaymentData } from "../../data/homePage.js";

function CafPayment() {
    return(
        <SectionContainer title={ CafPaymentData.title }>
                <ul className="caf-payment__list">
                    <li className="caf-payment__item">
                        { CafPaymentData.item1 }
                    </li>
                    <li className="caf-payment__item">
                        { CafPaymentData.item2 }
                    </li>
                    <li className="caf-payment__item">
                        { CafPaymentData.item3 }
                    </li>
                </ul>
                <PrimaryButton children={ CafPaymentData.btn } href={ CafPaymentData.link }/>
        </SectionContainer>
    )
}

export default CafPayment;