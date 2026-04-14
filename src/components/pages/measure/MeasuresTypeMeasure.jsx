import { measures } from "../../../data/measurePage";
import { SectionContainer } from "../../ui";
import ItemCard from "../../ui/cards/IntemCard";

function MeasureTypeMeasure() {
    return (
        <SectionContainer title="Les mesures">
            <div>
                {measures.cards.map((card) => (
                    <ItemCard key={card.id} title={card.title} description={card.description} lists={card.lists} infos={card.infos} />
                ))}
            </div>
        </SectionContainer>
    )
}

export default MeasureTypeMeasure;