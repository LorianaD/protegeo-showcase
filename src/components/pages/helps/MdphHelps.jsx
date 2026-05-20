import { mdph } from "../../../data/helpsPage";
import { ItemCard, SectionContainer } from "../../ui";

function MdphHelps() {
    return(
        <SectionContainer title={mdph.title}>
            <ItemCard
                description={mdph.description}
                lists={mdph.lists}
                infos={mdph.infos}
                conclusion={mdph.conclusion}
            />
        </SectionContainer>
    )
}

export default MdphHelps;