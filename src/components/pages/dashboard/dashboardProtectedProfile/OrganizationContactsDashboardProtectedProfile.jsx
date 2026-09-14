import { ContactFormModal, DashboardSection, DashboardSectionLoading, UpdateFormFooter } from "@/components/ui";
import { useContactManagement, useContacts, useOrganizationContactForm, useProtectedPerson } from "@/hooks";
import { formatContactCards, sortOrganizationContacts } from "@/utils";
import { useOutletContext } from "react-router";
import { ContactCardList } from "./contacts";

function OrganizationContactsDashboardProtectedProfile() {
    const { page, dossierId } = useOutletContext();

    const section = page.organization;

    const { protectedPerson, loading: protectedPersonLoading, error: protectedPersonError, refreshProtectedPerson } = useProtectedPerson(dossierId);

    const { contacts, isLoading, error, refreshContacts } = useContacts(dossierId, "organization");

    const cardTypes = {
        caf: section.caf,
        cpam: section.cpam,
        mdph: section.mdph,
        tax_office: section.tax_office,
        bank: section.bank,
        other_organization: section.other_organization,
    };

    const orderedContacts = sortOrganizationContacts(contacts);

    const cards = formatContactCards(
        orderedContacts,
        cardTypes
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
        handleContactSubmit,
    } = useOrganizationContactForm(dossierId, section.form, refreshContacts);

    const {
        isManagingContacts,
        selectedContact,
        editFormData,
        isEditModalOpen,
        isUpdating,
        updateError,
        isDeleting,
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
    } = useContactManagement({ dossierId, protectedPerson, refreshProtectedPerson, refreshContacts });

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
        );
    }

    return (
        <>
            <DashboardSection
                title={section.header.title}
                actionLabel={isManagingContacts ? null : section.header.btn_label}
                addLabel={section.header.btn_label_add}
                onAction={handleStartManagement}
                onAdd={handleOpenContactModal}
                variant="profile"
            >
                {contacts.length === 0 ? (
                    <p>Aucun organisme trouvé.</p>
                ) : (
                    <form
                        className="update-form"
                        onSubmit={handleSubmitManagement}
                    >
                        <div className="contact-card-list-container">
                            <ContactCardList
                                contactCards={cards}
                                actions={section.actions}
                                showActions={isManagingContacts}
                                onEdit={handleOpenEditModal}
                                onDelete={handleDeleteContact}
                                disabled={isUpdating || isDeleting}
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
                    category="organization"
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
                    category="organization"
                    cancelLabel={page.footer_form.btn_cancel_label}
                    submitLabel={page.footer_form.btn_recorded_label}
                    loading={isUpdating}
                    error={updateError}
                />
            )}
        </>
    );
}

export default OrganizationContactsDashboardProtectedProfile;