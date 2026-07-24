import { Input, Select, Textarea } from "../forms";

function InfoField({ label, value, editing = false, name, type = "text", onChange, variant, options = [], placeholder }) {
    const hasOptions = options.length > 0;
    const isTextarea = type === "textarea";

    function renderEditableField() {
        if (hasOptions) {
            return (
                <Select 
                    name={name}
                    value={value}
                    options={options}
                    onChange={onChange}
                />
            );
        }

        if (isTextarea) {
            return (
                <Textarea
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />            
            )
        }

        return (
            <Input 
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
        )
    }


    return (
        <div className={`info-item info-item--${variant}`}>
            <p className="info-label">
                { label }
            </p>
            {editing ? (
                renderEditableField()
            ) : (
                <p className={`info-value info-value--${variant}`}>
                    {Array.isArray(value)
                        ? value.map((line) => (
                            <span key={line} className="info-value__line">{line}</span>
                        ))
                        : value
                    }
                </p>
            )}
        </div>
    )
}

export default InfoField;