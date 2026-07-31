import { ContactCard, ContactForm, ContactFormModal, DashboardSection, DashboardSectionLoading, Modal } from "@/components/ui";
import { useContacts } from "@/hooks";
import { formatContactFieldValue } from "@/utils";
import { useState } from "react";
import { useOutletContext } from "react-router";

function FamilyDashboardProtectedProfile() {
    const { page, dossierId } = useOutletContext();

    const section = page.family;

    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [contactType, setContactType] = useState("");

    const contactCardTypes = {
        ...section.partners,
        ...section.parents,
    };

    const {contacts, isLoading, error, refreshContacts} = useContacts(dossierId, "family");

    /**
     * Opens the contact creation modal.
     */
    function handleOpenContactModal() {
        setIsContactModalOpen(true);
    }

    /**
     * Closes the contact creation modal.
     */
    function handleCloseContactModal() {
        setIsContactModalOpen(false);
    }

    /**
     * Refreshes the contact list after a successful creation.
     */
    async function handleContactCreated() {
        await refreshContacts();
        handleCloseContactModal();
    }

    function handleContactTypeChange(event) {
        if (event.target.name !== "contact_type") {
            return;
        }

        setContactType(event.target.value);
    }

    const contactFormFields = section.form.fields.filter((field) => {
        if (field.name === "relation_type") {
            return contactType === "trusted_person";
        }

        return true;
    });

    if (isLoading) {
        return (
            <DashboardSectionLoading section={section} page={page}/>
        );
    }

    if (error) {
        return (
            <DashboardSection title={section.header.title}>
                <p>{error}</p>
            </DashboardSection>
        )
    }

    if (contacts.length === 0) {
        return (
            <DashboardSection title={section.header.title}  actionLabel={ section.header.btn_label } addLabel={section.header.btn_label_add} onAdd={handleOpenContactModal}>
                <p>Aucun membre trouvé.</p>
            </DashboardSection>
        )
    }

    const contactCards = contacts.map((contact) => {
        const card = contactCardTypes[contact.contact_type];

        if (!card) {
            return null;
        }

        const cardFields = card.fields.map((field) => ({
            ...field,
            value: formatContactFieldValue(field, contact),
        }));

        return {
            id: contact.id,
            title: card.title,
            fields: cardFields,
            contact,
        };
    });

    return (
        <>
            <DashboardSection title={section.header.title} actionLabel={ section.header.btn_label } addLabel={section.header.btn_label_add} onAdd={handleOpenContactModal}>
                <div className="contact-card-list">
                    {contactCards.map((card) => (
                        <ContactCard
                            key={card.id}
                            card={card}
                        />
                    ))}
                </div>
            </DashboardSection>

            {isContactModalOpen && (
                <ContactFormModal
                    form={section.form}
                    fields={contactFormFields}
                    onChange={handleContactTypeChange}
                    onClose={handleCloseContactModal}
                    onSubmit={handleContactCreated}
                    category="family"
                    cancelLabel={page.footer_form.btn_cancel_label}
                    submitLabel={page.footer_form.btn_recorded_label}
                />
            )}
        </>

    );
}

export default FamilyDashboardProtectedProfile;