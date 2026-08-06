function RadioGroup({ name, options = [], value, onChange }) {
    return (
        <div className="radio-group">
            {options.map((option) => (
                <label key={`${name}-${option.value}`} className="radio-group__option">
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={value === option.value}
                        onChange={onChange}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
}

export default RadioGroup;