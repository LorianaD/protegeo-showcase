import RedirectionCard from "../cards/RedirectionCard.jsx";
import { redirectionCards } from "../../../data/actions";

function SectionCardsContainer({ names = [] }) {
    return (
        <section className="section-cards-container">
            {names.map((name) => {

                const card = redirectionCards[name];
                if (!card) return null;

                return (
                    <RedirectionCard
                        key={card.name}
                        name={card.name}
                        img={card.img}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                )

            })}
        </section>
    )
};

export default SectionCardsContainer;