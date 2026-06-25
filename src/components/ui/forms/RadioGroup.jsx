function RadioGroup({ name, options }) {
    return (
        <div className="radio-group">
            {options.map((option) => (
                <label key={option} className="radio-group__option">
                    <input
                        type="radio"
                        name={name}
                        value={option}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
}

export default RadioGroup;