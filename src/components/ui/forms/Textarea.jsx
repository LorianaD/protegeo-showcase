function Textarea({ name , placeholder }) {
    return (
        <textarea 
            name={ name } 
            id={ name } 
            placeholder={ placeholder }
            className="form-textarea"
        />
    )
}

export default Textarea;