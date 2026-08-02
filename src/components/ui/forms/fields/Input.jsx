function Input({ name, type = "text", placeholder, value, onChange, required = false }) {
    return (
        <input 
            type={ type } 
            id={ name } 
            name={ name } 
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
            required={ required }
            className="form-input"
        />
    )
}

export default Input;