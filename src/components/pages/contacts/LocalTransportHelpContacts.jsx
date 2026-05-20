import { contactLocalTransportHelp } from "../../../data";
import { ItemCard, SectionContainer } from "../../ui";

function LocalTransportHelpContacts() {
    return (
        <SectionContainer title={contactLocalTransportHelp.title}>
            <ItemCard
                description={contactLocalTransportHelp.description}
                lists={[
                    {
                        items: contactLocalTransportHelp.aids.map((aid) => ({
                            label: aid.name,
                            details: aid.details,
                            text: aid.text,
                            href: aid.url,
                            linkLabel: aid.linkLabel,
                            extra: aid.extra,
                            textAsParagraph: true,
                        })),
                    },
                ]}
                conclusion={contactLocalTransportHelp.conclusion}
            />
        </SectionContainer>
    )
}

export default LocalTransportHelpContacts;