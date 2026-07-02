function Select({ name, options = [], placeholder, value, onChange, required, variant = "form" }) {
    const className = `select select--${variant}`
    return (
        <select name={ name } id={ name } value={value} onChange={onChange} required={required} className={className}>
            { placeholder && (
                <option value="">
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