function DateInput({ name, value, onChange, required }) {
    return (
        <input 
            type="date" 
            name={ name } 
            id={ name }
            className="form-input form-input--date"
            value={value}
            onChange={onChange}
            required={required}
        />
    )
}

export default DateInput;