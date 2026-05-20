import { transport } from "../../../data/helpsPage";
import { ItemCard, SectionContainer } from "../../ui";

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