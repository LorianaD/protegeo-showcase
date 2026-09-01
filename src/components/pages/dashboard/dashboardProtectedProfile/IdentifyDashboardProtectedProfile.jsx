import { DashboardSection, DashboardSectionLoading, FormField, InfoField, InfoFieldGroup, SectionContainer, SectionPageActions, Textarea, UpdateFormFooter } from "@/components/ui";
import { useEditableForm, useProtectedPerson, useUpdateProtectedPerson } from "@/hooks";
import { formatCivility, formatDate, formatMaritalStatus, formatPhoneNumber, getProtectedPersonPhoto, santizePhoneNumber } from "@/utils";
import { useOutletContext } from "react-router";

function IdentifyDashboardProtectedProfile() {
    const { page, dossierId } = useOutletContext();

    const section = page.profile;
    const identity = section.identity;
    const identityFields = identity.fields;
    const identityFieldList = identity.rows.flat();
    const detailFieldList = section.details.flat().map((field) => field.name);

    const fieldList = [
        ...identityFieldList,
        ...detailFieldList,
        section.notes.name,
    ];

    const { protectedPerson, loading, error, refreshProtectedPerson } = useProtectedPerson(dossierId);

    const { editing, formData, handleChange, handleEdit, handleCancel, closeEditing } = useEditableForm(fieldList, protectedPerson);
    
    const { updateProtectedPerson, updating, updateError } = useUpdateProtectedPerson();

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            ...formData,
            phone_number: santizePhoneNumber(formData.phone_number),
        }

        const updatedPerson = await updateProtectedPerson(dossierId, data);

        if (!updatedPerson) {
            return;
        }

        await refreshProtectedPerson();
        closeEditing();
    }

    if (loading) {
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

    if (!protectedPerson) {
        return (
            <DashboardSection title={section.header.title}>
                <p>Aucune personne protégée trouvée.</p>
            </DashboardSection>
        )
    }

    const identityRows = identity.rows.map((row) =>
        row.map((fieldName) => ({
            ...identityFields[fieldName],
            value:
            fieldName === "birth_date"
                ? formatDate(protectedPerson.birth_date)
                : fieldName === "civility"
                    ? formatCivility(protectedPerson.civility)
                    : fieldName === "family_situation"
                        ? formatMaritalStatus(protectedPerson.family_situation)
                        : protectedPerson[fieldName] ?? "Non renseigné",
        }))
    );

    const detailRows = section.details.map((row) =>
        row.map((item) => ({
            ...item,
            value:
                item.name === "phone_number"
                    ? formatPhoneNumber(protectedPerson.phone_number)
                    : protectedPerson[item.name] ?? "Non renseigné",
        }))
    );

    const photo = getProtectedPersonPhoto(
        protectedPerson.photo_url,
        protectedPerson.civility,
    );

    return (
        <DashboardSection title={section.header.title} actionLabel={ editing ? null : section.header.btn_label } onAction={ handleEdit } variant="profile">
            <form onSubmit={handleSubmit} className="update-form">
                <div className="info-list">
                    <div className="protected-profile-identity">
                        <div className="protected-profile-identity__photo">
                            <img
                                src={photo}
                                alt={`${identity.photo_alt} ${protectedPerson.firstname} ${protectedPerson.lastname}`}
                            />
                        </div>

                        <div className="protected-profile-identity__fields">
                            {identityRows.map((row, index) => (
                                <InfoFieldGroup key={`identity-${index}`}>
                                    {row.map((item) => (
                                        <InfoField
                                            key={item.name ?? item.label}
                                            label={item.label}
                                            name={item.name}
                                            type={item.type}
                                            options={item.options}
                                            value={editing ? formData[item.name] : item.value}
                                            editing={editing}
                                            onChange={handleChange}
                                        />
                                    ))}
                                </InfoFieldGroup>
                            ))}
                        </div>
                    </div>

                    {detailRows.map((row, index) => (
                        <InfoFieldGroup key={index}>
                            {row.map((item) => (
                                <InfoField
                                    key={item.name ?? item.label}
                                    label={item.label}
                                    name={item.name}
                                    type={item.type}
                                    value={editing ? formData[item.name] : item.value}
                                    editing={editing}
                                    onChange={handleChange}
                                />
                            ))}
                        </InfoFieldGroup>
                    ))}
                    
                    <InfoField
                        label={section.notes.label}
                        type={section.notes.type}
                        name={section.notes.name}
                        placeholder={section.notes.placeholder}
                        value={editing ? formData[section.notes.name] : protectedPerson[section.notes.name] ?? section.notes.placeholder }
                        editing={editing}
                        onChange={handleChange}
                        variant="textarea"
                    />

                </div>

                {editing && (
                    <UpdateFormFooter
                        cancelLabel={page.footer_form.btn_cancel_label}
                        submitLabel={page.footer_form.btn_recorded_label}
                        onCancel={handleCancel}
                        loading={updating}
                        error={updateError}
                    />
                )}
            </form>
        </DashboardSection>
    )
}

export default IdentifyDashboardProtectedProfile;