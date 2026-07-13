import { Input } from "../forms";

function InfoField({ label, value, editing = false, name, type = "text", onChange }) {
    return (
        <div className="info-item">
            <p className="info-label">
                { label }
            </p>
            {editing ? (
                <Input 
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <p className="info-value">
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