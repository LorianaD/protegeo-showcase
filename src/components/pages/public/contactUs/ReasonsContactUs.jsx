import { SectionContainer, ShortcutCard } from "@/components/ui";
import { contactUsReasons } from "@/data";

function ReasonsContactUs() {
    return (
        <SectionContainer title={contactUsReasons.title} variant="withoutborder" variantChindren="row">
            {contactUsReasons.cards.map((card) => (
                <ShortcutCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    variant="guide"
                />
            ))}

        </SectionContainer>
    )
}

export default ReasonsContactUs;