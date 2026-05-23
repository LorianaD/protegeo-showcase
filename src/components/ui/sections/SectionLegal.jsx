import { ItemCard } from "../cards";
import SectionContainer from "./SectionContainer";

function SectionLegal({ data }) {

    const description = data.descriptions ?? data.description;

    return (
        <SectionContainer variant="withoutborder">

            <ItemCard
                title={data.title}
                description={description}
                lists={data.lists}
                infos={data.infos}
                links={data.links}
                conclusion={data.conclusion}
            />

        </SectionContainer>
    )
}

export default SectionLegal;