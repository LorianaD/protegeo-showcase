function FormMessage({ hint , error , children , variant = "default" }) {

    return (
        <div>
            {hint && (
                <p className="form-field__hint">
                    {hint}
                </p>
            )}

            {error && (
                <p className="form-field__error">
                    {error}
                </p>
            )}
            {children && (
                <p className={`form-message form-message--${variant}`}>
                    { children }
                </p>
            )}
        </div>
    );
}

export default FormMessage;