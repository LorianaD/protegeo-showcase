import { contactOnlineTools } from "@/data";
import { ItemCard, SectionContainer } from "@/components";

function OnlineToolsContacts(params) {
    return (
        <SectionContainer title={contactOnlineTools.title}>
            <ItemCard
                description={contactOnlineTools.description}
                lists={[
                    {
                        items: contactOnlineTools.tools.map((tool) => ({
                            label: tool.name,
                            details: tool.details,
                            text: tool.description || "",
                            href: tool.url,
                        })),
                    },
                ]}
                conclusion={contactOnlineTools.conclusion}
            />
        </SectionContainer>
    )
}

export default OnlineToolsContacts;