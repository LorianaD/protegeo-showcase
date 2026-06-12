function Select({ name, options = [], placeholder, value, onChange, required }) {
    return (
        <select name={ name } id={ name } value={value} onChange={onChange} required={required} className="form-select">
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