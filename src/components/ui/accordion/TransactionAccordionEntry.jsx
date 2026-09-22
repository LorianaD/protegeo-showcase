import { InfoField } from "@/components/ui";

function TransactionAccordionEntry({ transaction, fields = [], editing = false, formData = {}, onChange, variant }) {
    return (
        <div className="transaction-accordion__entry">
            <div className="transaction-accordion__entry-fields">
                {fields.map((field) => (
                    <InfoField
                        key={field.name}
                        name={field.name}
                        type={field.type}
                        options={field.options}
                        placeholder={field.placeholder}
                        value={editing ? formData[field.name] : field.formatValue(transaction)}
                        editing={editing}
                        onChange={onChange}
                        variant={variant}
                    />
                ))}
            </div>
        </div>
    );
}

export default TransactionAccordionEntry;