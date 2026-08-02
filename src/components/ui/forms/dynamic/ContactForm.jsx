import { Input, Select } from "../fields";
import { FormCard, FormField } from "../layout";

function ContactForm({ form, fields, onChange, onCancel, onSubmit, cancelLabel, submitLabel, loading, error }) {

    return (
        <FormCard
            description={form.header.description}
            btn_label={loading ? "Enregistrement..." : submitLabel}
            btn_cancel_label={cancelLabel}
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
                    mention={field.mention}
                >
                    {field.options ? (
                        <Select
                            name={field.name}
                            options={field.options}
                            onChange={onChange}
                            placeholder={field.placeholder}
                        />
                    ) : (
                        <Input
                            name={field.name}
                            type={field.type}
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