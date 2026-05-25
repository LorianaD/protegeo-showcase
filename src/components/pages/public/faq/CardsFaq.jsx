import { SectionContainer, ShortcutCard } from "@/components/ui";
import { faqCards } from "@/data";

function CardsFaq() {
    return (
        <SectionContainer variant="withoutborder" variantChindren="row">
            {faqCards.map((card) => (

                <ShortcutCard 
                    img={card.icon} 
                    title={card.title}
                />

            ))}
        </SectionContainer>
    )
}

export default CardsFaq;