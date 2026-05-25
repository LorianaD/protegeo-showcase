import { SectionContainer, ShortcutCard } from "@/components/ui";
import { faqCards } from "@/data";

function CardsFaq() {
    return (
        <SectionContainer variant="withoutborder" variantChindren="row">
            {faqCards.map((card) => (

                <ShortcutCard
                    key={card.title} 
                    img={card.icon} 
                    title={card.title}
                />

            ))}
        </SectionContainer>
    )
}

export default CardsFaq;