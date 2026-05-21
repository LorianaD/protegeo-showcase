import { contactMdph } from "@/data";
import { ItemCard, SectionContainer } from "@/components/ui";

function MdphContacts() {
    return (
        <SectionContainer title={contactMdph.title}>
            <ItemCard
                description={contactMdph.description}
                links={[
                    {
                        label: contactMdph.url,
                        href: contactMdph.url,
                    },
                ]}
                linkPosition="beforeLists"
                lists={[
                    {
                        title: contactMdph.introList,
                        items: contactMdph.features,
                    },
                ]}
            />
        </SectionContainer>
    );
}

export default MdphContacts;