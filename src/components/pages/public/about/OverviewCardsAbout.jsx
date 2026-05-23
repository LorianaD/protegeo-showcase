import { aboutOverviewCards } from "@/data";
import { RedirectionCard } from "@/components";

function OverviewCardsAbout() {
    return (
        <section className="section-cards-container">
            {aboutOverviewCards.map((card) => (
                <RedirectionCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    link={card.linkUrl}
                    linkLabel={card.linkLabel}
                />
            ))}
        </section>
    )
}

export default OverviewCardsAbout;