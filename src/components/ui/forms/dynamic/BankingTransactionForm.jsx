import { DateInput, Input, Select } from "@/components/ui";
import { FormCard, FormField } from "@/components/ui";

function BankingTransactionForm({
    form,
    fields,
    onChange,
    onCancel,
    onSubmit,
    loading,
    error,
}) {
    return (
        <FormCard
            btn_label={loading ? "Enregistrement..." : form.actions.submit}
            btn_cancel_label={form.actions.cancel}
            onSubmit={onSubmit}
            onCancel={onCancel}
        >
            {fields.map((field) => (
                <FormField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    required={field.required !== false}
                >
                    {field.type === "select" && (
                        <Select
                            name={field.name}
                            value={field.value}
                            options={field.options}
                            placeholder={field.placeholder}
                            onChange={onChange}
                        />
                    )}

                    {field.type === "currency" && (
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

export default BankingTransactionForm;