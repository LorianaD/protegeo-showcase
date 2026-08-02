function Textarea({ name , placeholder, value, onChange,  }) {
    return (
        <textarea 
            name={ name } 
            id={ name } 
            placeholder={ placeholder }
            className="form-textarea"
            value={ value }
            onChange={ onChange }
        />
    )
}

export default Textarea;