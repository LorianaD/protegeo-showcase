import { cpam } from "../../../data/helpsPage";
import { ItemCard, SectionContainer } from "../../ui";

function CpamHelps(params) {
    return (
        <SectionContainer title={cpam.title}>

            <ItemCard 
                infos={cpam.infos}
            />

        </SectionContainer>
    )
}

export default CpamHelps;