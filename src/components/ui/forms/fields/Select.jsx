function Select({ name, options = [], placeholder, value, onChange, required, variant = "form", disabled = false }) {
    const className = `select select--${variant}`
    
    const selectedValue = value ?? "";

    return (
        <select name={name} id={name} value={selectedValue} onChange={onChange} required={required} className={className} disabled={disabled}>
            { placeholder && (
                <option key="placeholder" value="" disabled>
                    {placeholder}
                </option>
            )}

            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default Select;