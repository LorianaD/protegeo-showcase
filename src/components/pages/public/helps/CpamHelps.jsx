import { helpsCpam as cpam } from "@/data";
import { ItemCard, SectionContainer } from "@/components";

function CpamHelps() {
    return (
        <SectionContainer title={cpam.title}>

            <ItemCard 
                infos={cpam.infos}
            />

        </SectionContainer>
    )
}

export default CpamHelps;
