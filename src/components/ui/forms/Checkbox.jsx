function Checkbox({ name }) {
    return (
        <input 
            type="checkbox" 
            name={ name } 
            id={ name }
            className="form-checkbox"
        />
    )
}

export default Checkbox;