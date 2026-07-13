import { DashboardSection, InfoFieldGroup, InfoField, UpdateFormFooter, DashboardSectionLoading } from "@/components/ui";
import { useEditableForm, useUpdateUser } from "@/hooks";

function ComplementaryDashboardUserProfile({ page, user, loading, refreshUser }) {
    const section = page.complementary_information;
    const field = section.fields;
    const fieldList = section.rows.flat();
    const editableFieldList = ["profession", "practicing"];

    const {editing, formData, handleChange, handleEdit, handleCancel, closeEditing} = useEditableForm(editableFieldList, user);

    const { updateProfile, updating, updateError } = useUpdateUser();

    async function handleSubmit(event) {
        event.preventDefault();

        const data = {
            profession: formData.profession,
            practicing: formData.practicing,
        };

        const updatedUser = await updateProfile(data);

        if (!updatedUser) {
            return;
        }

        await refreshUser();
        closeEditing();
    }

    if (loading || !user) {
        return (
            <DashboardSectionLoading section={section} />
        );
    }    

    const rows = section.rows.map((row) => (
        row.map((fieldName) => ({
            ...field[fieldName],
            value: user[fieldName] ?? "Non renseigné",
            editable: fieldName !== "roles",
        }))
    ));

    return (
        <DashboardSection
            title={ section.header.title }
            actionLabel={ editing ? null : section.header.btn_label }
            onAction={handleEdit}
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
                                    editing={editing && item.editable}
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

export default ComplementaryDashboardUserProfile;