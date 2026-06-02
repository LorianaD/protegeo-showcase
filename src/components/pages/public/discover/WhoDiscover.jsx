import { SectionContainer, ShortcutCard } from "@/components/ui";
import { discoverWho } from "@/data";

function WhoDiscover() {
    const section = discoverWho;
    return (
        <SectionContainer title={section.title} variant="withoutborder">
            <div className="serves-discover__cards">
                {section.cards.map((card) =>(
                    <ShortcutCard 
                        key={card.title}
                        img={card.icon}
                        title={card.title}
                        description={card.description}
                        variant="discover"
                    />
                ))}                
            </div>
        </SectionContainer>
    )
}

export default WhoDiscover;