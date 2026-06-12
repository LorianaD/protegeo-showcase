function CurrencyInput({ name, value, onChange, placeholder = "0.00", required }) {
    return (
        <div className="form-currency">
            <input
                className="form-input form-input--currency"
                type="number"
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                min="0"
                step="0.01"
                required={required}
            />

            <span className="form-currency__symbol">€</span>
        </div>
    )
}

export default CurrencyInput;