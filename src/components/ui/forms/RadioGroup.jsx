function RadioGroup({ name }) {
    return (
        <input 
            type="radio" 
            name={ name } 
            id={ name } 
            className="form-radio"
        />
    )
}

export default RadioGroup;