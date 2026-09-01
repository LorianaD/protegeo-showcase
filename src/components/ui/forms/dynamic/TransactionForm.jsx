import { CurrencyInput, DateInput, Input, Select } from "../fields";
import { FormCard, FormField } from "../layout";

function TransactionForm({ form, fields, onChange, onCancel, onSubmit, cancelLabel, submitLabel, loading, error }) {
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
                    {field.type === "select" && (
                        <Select
                            name={field.name}
                            options={field.options}
                            value={field.value}
                            onChange={onChange}
                            placeholder={field.placeholder}
                        />
                    )}

                    {field.type === "currency" && (
                        <CurrencyInput
                            name={field.name}
                            value={field.value}
                            onChange={onChange}
                            placeholder={field.placeholder}
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

                    {field.type === "text" && (
                        <Input
                            name={field.name}
                            type={field.type}
                            value={field.value}
                            placeholder={field.placeholder}
                            onChange={onChange}
                            required={field.required !== false}
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

export default TransactionForm;