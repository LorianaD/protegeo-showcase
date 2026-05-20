import { steps } from "../../../data";
import { ItemCard, SectionContainer } from "../../ui";

function Steps() {
    return (
        <>
            {steps.map((step) => (
                <SectionContainer key={step.id}>
                    <ItemCard
                        title={step.title}
                        description={step.description}
                        lists={step.lists}
                        infos={step.infos}
                        conclusion={step.conclusion}
                    />
                </SectionContainer>
            ))}
        </>
    )
}

export default Steps;