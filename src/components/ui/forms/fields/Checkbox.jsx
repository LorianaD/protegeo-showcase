function Checkbox({ name, checked, onChange, disabled = false, variant = "default" }) {
    return (
        <input 
            type="checkbox" 
            name={ name } 
            id={ name }
            className={`form-checkbox form-checkbox--${variant}`}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
        />
    )
}

export default Checkbox;