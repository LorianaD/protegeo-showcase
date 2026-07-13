import { DashboardSection, InfoFieldGroup, InfoField, Modal, UpdateFormFooter, DashboardSectionLoading } from "@/components/ui";
import { useUpdatePassword } from "@/hooks";
import { useState } from "react";

function PasswordDashboardUserProfile({ page, user, loading }) {
    const section = page.security;
    const field = section.fields;
    const modalRows = section.rows.map((row) => (
        row.map((fieldName) => field[fieldName])
    ));

    const [editing, setEditing] = useState(false);
    const [formError, setFormError] = useState("");

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const {updatePassword, updating, updateError} = useUpdatePassword();

    function handleEdit() {
        setFormError("");
        setEditing(true);
    }

    function handleCancel() {
        setEditing(false);
        setFormError("");

        setFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        });
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setFormError("");

        setFormData((currentData)=>({
            ...currentData,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setFormError("");

        if (!formData.currentPassword) {
            setFormError(section.messages.currentRequired);
            return;
        }

        if (!formData.newPassword) {
            setFormError(section.messages.newRequired);
            return;
        }

        if (!formData.confirmPassword) {
            setFormError(section.messages.confirmRequired);
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            setFormError(section.messages.passwordMismatch);
            return;
        }

        if (formData.currentPassword === formData.newPassword) {
            setFormError(section.messages.passwordSame);
            return;
        }

        const data = {
            current_password: formData.currentPassword,
            new_password: formData.newPassword,
        };

        const response = await updatePassword(data);

        if (!response) {
            return;
        }

        handleCancel();
    }

    if (loading || !user) {
        return (
            <DashboardSectionLoading section={section} />
        );
    }

    const rows = [
        [{ 
            label: field.password.title, 
            value: field.password.value,
            editing: false,
        }],
    ];

    return (
        <>
            <DashboardSection
                title={ section.header.title }
                actionLabel={ section.header.btn_label }
                onAction={handleEdit}
            >
                <div className="info-list">
                    {rows.map((row, index) => (
                        <InfoFieldGroup key={index}>
                            {row.map((item) => (
                                <InfoField
                                    key={item.name ?? item.label}
                                    label={item.label}
                                    name={item.name}
                                    type={item.type}
                                    value={item.value}
                                />
                            ))}
                        </InfoFieldGroup>
                    ))}
                </div>
            </DashboardSection>

            {editing && (
                <Modal title={section.modal.title} onClose={handleCancel}>
                    <form className="update-form" onSubmit={handleSubmit}>
                        <div className="info-list">
                            {modalRows.map((row, index) => (
                                <InfoFieldGroup key={index}>
                                    {row.map((item) => (
                                        <InfoField
                                            key={item.name}
                                            label={item.label}
                                            name={item.name}
                                            type={item.type}
                                            value={formData[item.name]}
                                            editing={true}
                                            onChange={handleChange}
                                        />
                                    ))}
                                </InfoFieldGroup>
                            ))}
                        </div>

                        <UpdateFormFooter
                            cancelLabel={section.footer.btn_cancel_label}
                            submitLabel={section.footer.btn_recorded_label}
                            onCancel={handleCancel}
                            loading={updating}
                            error={formError || updateError}
                        />
                    </form>
                </Modal>
            )}
        </>
    )    
}

export default PasswordDashboardUserProfile;