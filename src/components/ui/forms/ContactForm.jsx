import FormCard from "./FormCard";
import FormField from "./FormField";
import Input from "./Input";
import Select from "./Select";

function ContactForm({ form, fields, onChange, onCancel, onSubmit, cancelLabel, submitLabel }) {

    return (
        <FormCard
            description={form.header.description}
            btn_label={submitLabel}
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
                        />
                    ) : (
                        <Input
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            // onChange={onChange}
                        />
                    )}
                </FormField>
            ))}
        </FormCard>
    )
}

export default ContactForm;