function Select({ name, options = [], placeholder, value, onChange, required, variant = "form", disabled = false }) {
    const className = `select select--${variant}`
    return (
        <select name={ name } id={ name } value={value} onChange={onChange} required={required} className={className} disabled={disabled}>
            { placeholder && (
                <option value="" disabled>
                    { placeholder }
                </option>
            )}

            {options.map((option) => (
                <option key={option.value} value={ option.value }>
                    { option.label }
                </option>
            ))}
        </select>
    )
}

export default Select;