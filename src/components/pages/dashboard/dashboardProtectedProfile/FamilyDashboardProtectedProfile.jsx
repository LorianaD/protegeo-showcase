import { ContactFormModal, DashboardSection, DashboardSectionLoading, UpdateFormFooter } from "@/components/ui";
import { useContactManagement, useContacts, useFamilyContactForm, useProtectedPerson } from "@/hooks";
import { formatContactCards, formatContactTableRows } from "@/utils";
import { useOutletContext } from "react-router";
import { ContactCardList, ContactObservationNote, ContactTable } from "./contacts";

function FamilyDashboardProtectedProfile() {
    const { page, dossierId } = useOutletContext();

    const section = page.family;

    const {
        protectedPerson,
        loading: protectedPersonLoading,
        error: protectedPersonError,
        refreshProtectedPerson,
    } = useProtectedPerson(dossierId);

    const {
        contacts,
        isLoading,
        error,
        refreshContacts,
    } = useContacts(dossierId, "family");

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

    const {
        isManagingContacts,
        selectedContact,
        editFormData,
        isEditModalOpen,
        isUpdating,
        updateError,
        isDeleting,

        isEditingObservation,
        observationValue,
        updatingObservation,
        observationError,

        handleStartManagement,
        handleCancelManagement,
        handleSubmitManagement,

        handleOpenEditModal,
        handleCloseEditModal,
        handleEditChange,
        handleUpdateContact,
        handleDeleteContact,
        handleObservationChange,
    } = useContactManagement({ dossierId, protectedPerson, refreshProtectedPerson, refreshContacts, observationFieldName: section.notes.name });

    const loading = isLoading || protectedPersonLoading;
    const pageError = error || protectedPersonError;

    if (loading) {
        return (
            <DashboardSectionLoading 
                section={section} 
                page={page}
            />
        );
    }

    if (pageError) {
        return (
            <DashboardSection title={section.header.title}>
                <p>{pageError}</p>
            </DashboardSection>
        )
    }

    return (
        <>
            <DashboardSection title={section.header.title} actionLabel={isManagingContacts ? null : section.header.btn_label} addLabel={section.header.btn_label_add} onAction={handleStartManagement} onAdd={handleOpenContactModal} variant="profile">
                {contacts.length === 0 ? (
                    <p>Aucun membre trouvé.</p>
                ) : (
                    <form className="update-form" onSubmit={handleSubmitManagement} >
                        <div className="family-info">
                            <ContactCardList
                                contactCards={partnerCards}
                                actions={section.actions}
                                showActions={isManagingContacts}
                                onEdit={handleOpenEditModal}
                                onDelete={handleDeleteContact}
                                disabled={isUpdating || isDeleting}
                            />

                            <ContactCardList
                                contactCards={parentCards}
                                actions={section.actions}
                                showActions={isManagingContacts}
                                onEdit={handleOpenEditModal}
                                onDelete={handleDeleteContact}
                                disabled={isUpdating || isDeleting}
                            />

                            <ContactTable
                                contactType={section.sibling}
                                rows={siblingTable}
                                actions={section.actions}
                                showActions={isManagingContacts}
                                onEdit={handleOpenEditModal}
                                onDelete={handleDeleteContact}
                                disabled={isUpdating || isDeleting}
                            />

                            <ContactTable
                                contactType={section.trusted_people}
                                rows={trustedPeopleRows}
                                actions={section.actions}
                                showActions={isManagingContacts}
                                onEdit={handleOpenEditModal}
                                onDelete={handleDeleteContact}
                                disabled={isUpdating || isDeleting}
                            />

                            <ContactTable
                                contactType={section.subrogated}
                                rows={subrogatedRows}
                                actions={section.actions}
                                showActions={isManagingContacts}
                                onEdit={handleOpenEditModal}
                                onDelete={handleDeleteContact}
                                disabled={isUpdating || isDeleting}
                            />

                            <ContactObservationNote
                                section={section}
                                value={
                                    isEditingObservation
                                        ? observationValue
                                        : protectedPerson?.[section.notes.name]
                                            ?? section.notes.placeholder
                                }
                                editing={isEditingObservation}
                                onChange={handleObservationChange}
                            />
                        </div>

                        {isManagingContacts && (
                            <UpdateFormFooter
                                cancelLabel={page.footer_form.btn_cancel_label}
                                submitLabel={page.footer_form.btn_recorded_label}
                                onCancel={handleCancelManagement}
                                loading={updatingObservation}
                                error={observationError}
                            />
                        )}
                    </form>
                )}
            </DashboardSection>

            {isContactModalOpen && (
                <ContactFormModal
                    form={{
                        ...section.form,
                        header: section.form.add.header,
                    }}
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

            {isEditModalOpen && selectedContact && (
                <ContactFormModal
                    form={{
                        ...section.form,
                        header: section.form.edit.header,
                    }}
                    fields={section.form.fields}
                    values={editFormData}
                    onChange={handleEditChange}
                    onClose={handleCloseEditModal}
                    onSubmit={handleUpdateContact}
                    category="family"
                    cancelLabel={page.footer_form.btn_cancel_label}
                    submitLabel={page.footer_form.btn_recorded_label}
                    loading={isUpdating}
                    error={updateError}
                />
            )}
        </>

    );
}

export default FamilyDashboardProtectedProfile;