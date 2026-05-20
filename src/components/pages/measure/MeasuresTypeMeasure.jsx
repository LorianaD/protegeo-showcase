import { measureMeasures } from "../../../data";
import { SectionContainer, ItemCard } from "../../ui";

function MeasureTypeMeasure() {
    return (
        <SectionContainer title={measureMeasures.title}>
            
            {measureMeasures.cards.map((card) => (
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

export default MeasureTypeMeasure;