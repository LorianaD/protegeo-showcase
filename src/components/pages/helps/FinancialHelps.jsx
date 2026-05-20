import { helpsFinancial as financial } from "../../../data";
import { ItemCard, SectionContainer } from "../../ui";

function FinancialHelps() {
    return(
        <SectionContainer title={financial.title}>
            {financial.cards.map((card) => (
                <ItemCard 
                    key={card.id} 
                    title={card.title} 
                    description={card.description} 
                    lists={card.lists} 
                    infos={card.infos} 
                />
            ))}
        </SectionContainer>
    )
}

export default FinancialHelps;
