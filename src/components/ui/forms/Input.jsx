function Input({ name, type = "text", placeholder, value, onChange, required }) {
    return (
        <input 
            type={ type } 
            id={ name } 
            name={ name } 
            placeholder={ placeholder }
            value={ value }
            onChange={ onChange }
            className="form-input"
        />
    )
}

export default Input;