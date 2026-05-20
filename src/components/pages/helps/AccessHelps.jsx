import { access } from "../../../data/helpsPage";
import { ItemCard, PrimaryButton, SectionContainer } from "../../ui";

function AccessHelps() {
    return (
        <SectionContainer title={access.title}>
            <ItemCard
                description={access.description}
                infos={access.infos}
            />
            <PrimaryButton href={access.href}>
                {access.btn}
            </PrimaryButton>
        </SectionContainer>
    )
}

export default AccessHelps;