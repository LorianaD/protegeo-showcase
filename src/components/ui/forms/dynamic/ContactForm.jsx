import { Input, Select } from "../fields";
import { FormCard, FormField } from "../layout";

function ContactForm({ form, fields, values = {}, onChange, onCancel, onSubmit, cancelLabel, submitLabel, loading, error }) {

    const selectedContactType = values.contact_type;

    const preparedFields = fields
        .filter((field) => {
            if (!field.contactTypes) {
                return true;
            }

            return field.contactTypes.includes(selectedContactType);
        })
        .map((field) => ({
            ...field,

            label:
                field.labels?.[selectedContactType]
                ?? field.label,

            placeholder:
                field.placeholders?.[selectedContactType]
                ?? field.placeholder,
        }));

    return (
        <FormCard
            description={form.header.description}
            btn_label={loading ? "Enregistrement..." : submitLabel}
            btn_cancel_label={cancelLabel}
            onSubmit={onSubmit}
            onCancel={onCancel}
        >
            {preparedFields.map((field) => (
                <FormField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    description={field.description}
                    required={field.required !== false}
                    mention={field.mention}
                >
                    {field.options ? (
                        <Select
                            name={field.name}
                            options={field.options}
                            value={values[field.name] ?? ""}
                            onChange={onChange}
                            placeholder={field.placeholder}
                        />
                    ) : (
                        <Input
                            name={field.name}
                            type={field.type}
                            value={values[field.name] ?? ""}
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
    )
}

export default ContactForm;