function DateInput({ name, value, onChange, required, min, max }) {
    return (
        <input 
            type="date" 
            name={ name } 
            id={ name }
            className="form-input form-input--date"
            value={value}
            onChange={onChange}
            required={required}
            min={min}
            max={max}
        />
    )
}

export default DateInput;