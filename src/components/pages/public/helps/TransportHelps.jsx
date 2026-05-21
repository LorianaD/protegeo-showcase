import { helpsTransport as transport } from "@/data";
import { ItemCard, SectionContainer } from "@/components/ui";

function TransportHelps() {
    return (
        <SectionContainer title={transport.title}>
            <ItemCard
                description={transport.description}
                lists={transport.lists}
                infos={transport.infos}
                links={transport.links}
            />
        </SectionContainer>
    )
}

export default TransportHelps;
