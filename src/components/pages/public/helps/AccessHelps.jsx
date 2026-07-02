import { helpsAccess as access } from "@/data";
import { ItemCard, Button, SectionContainer } from "@/components";

function AccessHelps() {
    return (
        <SectionContainer title={access.title}>
            <ItemCard
                description={access.description}
                infos={access.infos}
            />
            <Button 
                href={access.href}
                label={access.btn}
                variant="primary"
            />
        </SectionContainer>
    )
}

export default AccessHelps;
