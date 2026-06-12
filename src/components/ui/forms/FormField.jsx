function FormField({ name, label, description, error, required, children }) {
    return (
        <div className="form-field">
            <div>

                {label && (
                    <label className="form-field__label" htmlFor={ name }>
                        { label }
                        {required && <span className="form-field__required"> *</span>}
                    </label>
                )}

                {description && (
                    <p className="form-field__description">
                        { description }
                    </p>
                )}

            </div>

            <div className="form-field__control">
                { children }
            </div>

            {error && (
                <p className="form-field__error">
                    { error }
                </p>
            )}
        </div>
    )
}

export default FormField;