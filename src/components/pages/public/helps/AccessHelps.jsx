import { helpsAccess as access } from "@/data";
import { ItemCard, PrimaryButton, SectionContainer } from "@/components";

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
