function InfoField({ label, value }) {
    return (
        <div className="info-item">
            <p className="info-label">
                { label }
            </p>
            <p className="info-value">
                {Array.isArray(value)
                    ? value.map((line) => (
                        <span key={line} className="info-value__line">{line}</span>
                    ))
                    : value
                }
            </p>
        </div>
    )
}

export default InfoField;