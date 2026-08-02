function RadioGroup({ name, options, value, onChange }) {
    return (
        <div className="radio-group">
            {options.map((option) => (
                <label key={option} className="radio-group__option">
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={value === option}
                        onChange={onChange}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
}

export default RadioGroup;