import { DateInput, Input, Textarea } from "../fields";
import { FormCard, FormField } from "../layout";

function ManagementAccountForm({form, fields, onChange, onCancel, onSubmit, loading, error}) {
    return (
        <FormCard
            description={form.header.description}
            btn_label={
                loading
                    ? "Enregistrement..."
                    : form.actions.submit
            }
            btn_cancel_label={form.actions.cancel}
            onSubmit={onSubmit}
            onCancel={onCancel}
        >
            {fields.map((field) => (
                <FormField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    description={field.description}
                    required={field.required !== false}
                >
                    {field.type === "number" && (
                        <Input
                            name={field.name}
                            type="number"
                            value={field.value}
                            placeholder={field.placeholder}
                            onChange={onChange}
                            required={field.required !== false}
                        />
                    )}

                    {field.type === "date" && (
                        <DateInput
                            name={field.name}
                            value={field.value}
                            onChange={onChange}
                            required={field.required !== false}
                        />
                    )}

                    {field.type === "textarea" && (
                        <Textarea
                            name={field.name}
                            value={field.value}
                            placeholder={field.placeholder}
                            onChange={onChange}
                        />
                    )}
                </FormField>
            ))}

            {error && (
                <p className="form-error">
                    {error}
                </p>
            )}
        </FormCard>
    );
}

export default ManagementAccountForm;