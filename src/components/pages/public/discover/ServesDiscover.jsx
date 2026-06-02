import { SectionContainer, ShortcutCard } from "@/components/ui";
import { discoverServes } from "@/data";

function ServesDiscover() {
    const section = discoverServes;
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

export default ServesDiscover;