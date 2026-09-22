import { Input, Select, Textarea } from "../forms";

function InfoField({ label, value, editing = false, name, type = "text", onChange, variant, options = [], placeholder }) {
    const isSelect = type === "select";
    const isTextarea = type === "textarea" || variant === "textarea";

    function renderEditableField() {
        if (isSelect) {
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
            {label && (
                <p className="info-label">
                    { label }
                </p>
            )}
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