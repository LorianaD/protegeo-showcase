import { ContactFormModal, DashboardSection, DashboardSectionLoading, InfoField } from "@/components/ui";
import { useContacts, useFamilyContactForm } from "@/hooks";
import { formatContactCards, formatContactTableRows } from "@/utils";
import { useOutletContext } from "react-router";
import { ContactCardList, ContactObservationNote, ContactTable } from "./contacts";

function FamilyDashboardProtectedProfile() {
    const { page, dossierId } = useOutletContext();

    const section = page.family;

    const { contacts, isLoading, error, refreshContacts } = useContacts(dossierId, "family");

    const partnerCards = formatContactCards(
        contacts,
        section.partners
    );

    const parentCards = formatContactCards(
        contacts,
        section.parents
    );

    const siblingTable = formatContactTableRows(
        contacts,
        "sibling"
    );

    const trustedPeopleRows = formatContactTableRows(
        contacts,
        "trusted_person"
    );

    const subrogatedRows = formatContactTableRows(
        contacts,
        "subrogated"
    );

    const {
        isContactModalOpen, 
        contactFormData, 
        contactFormFields, 
        isAdding, 
        addError, 
        handleOpenContactModal, 
        handleCloseContactModal, 
        handleContactChange, 
        handleContactSubmit
    } = useFamilyContactForm(dossierId, section.form, refreshContacts);

    if (isLoading) {
        return (
            <DashboardSectionLoading 
                section={section} 
                page={page}
            />
        );
    }

    if (error) {
        return (
            <DashboardSection title={section.header.title}>
                <p>{error}</p>
            </DashboardSection>
        )
    }

    return (
        <>
            <DashboardSection title={section.header.title} actionLabel={section.header.btn_label} addLabel={section.header.btn_label_add} onAdd={handleOpenContactModal} variant="profile">
                {contacts.length === 0 ? (
                    <p>Aucun membre trouvé.</p>
                ) : (
                    <div className="family-info">
                        <ContactCardList contactCards={partnerCards}/>
                        <ContactCardList contactCards={parentCards}/>
                        <ContactTable contactType={section.sibling} rows={siblingTable}/>
                        <ContactTable contactType={section.trusted_people} rows={trustedPeopleRows}/>
                        <ContactTable contactType={section.subrogated} rows={subrogatedRows}/>
                        <ContactObservationNote section={section}/>
                    </div>
                )}
            </DashboardSection>

            {isContactModalOpen && (
                <ContactFormModal
                    form={section.form}
                    fields={contactFormFields}
                    values={contactFormData}
                    onChange={handleContactChange}
                    onClose={handleCloseContactModal}
                    onSubmit={handleContactSubmit}
                    category="family"
                    cancelLabel={page.footer_form.btn_cancel_label}
                    submitLabel={page.footer_form.btn_recorded_label}
                    loading={isAdding}
                    error={addError}
                />
            )}
        </>

    );
}

export default FamilyDashboardProtectedProfile;