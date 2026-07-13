import { DashboardSection, InfoField, InfoFieldGroup, UpdateFormFooter, DashboardSectionLoading } from "@/components/ui";
import { useUpdateUser, useEditableForm } from "@/hooks";
import { formatDate, formatPhoneNumber, santizePhoneNumber } from "@/utils";

function IdentifyDashboardUserProfile({ page, user, loading, refreshUser }) {
    const section = page.identify;
    const field = section.fields;
    const fieldList = section.rows.flat();

    const {editing, formData, handleChange, handleEdit, handleCancel, closeEditing} = useEditableForm(fieldList, user);

    const { updateProfile, updating, updateError } = useUpdateUser();

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            ...formData,
            phone_number: santizePhoneNumber(formData.phone_number),
        }

        const updatedUser = await updateProfile(data);

        if (!updatedUser) {
            return;
        }

        await refreshUser();
        closeEditing();
    }

    if (loading || !user) {
        return (
            <DashboardSectionLoading section={section}/>
        );
    }

    const rows = section.rows.map((row) => (
        row.map((fieldName) => ({
            ...field[fieldName],
            value: fieldName === "birth_date" ? formatDate(user.birth_date) : fieldName === "phone_number" ? formatPhoneNumber(user.phone_number) : user[fieldName] ?? "Non renseigné",
        }))
    ));

    return (
        <DashboardSection
            title={ section.header.title }
            actionLabel={ editing ? null : section.header.btn_label }
            onAction={ handleEdit }
        >
            <form onSubmit={handleSubmit} className="update-form">
                <div className="info-list">
                    {rows.map((row, index) => (
                        <InfoFieldGroup key={index}>
                            {row.map((item) => (
                                <InfoField
                                    key={item.name ?? item.label}
                                    label={item.label}
                                    name={item.name}
                                    type={item.type}
                                    value={
                                        editing
                                            ? formData[item.name]
                                            : item.value
                                    }
                                    editing={editing}
                                    onChange={handleChange}
                                />
                            ))}
                        </InfoFieldGroup>
                    ))}
                </div>

                {editing && (
                    <UpdateFormFooter
                        cancelLabel={section.footer.btn_cancel_label}
                        submitLabel={section.footer.btn_recorded_label}
                        onCancel={handleCancel}
                        loading={updating}
                        error={updateError}
                    />
                )}
            </form>
        </DashboardSection>
    )
}

export default IdentifyDashboardUserProfile;