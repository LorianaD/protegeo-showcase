function InfoWarning({ icon, title, description, important, variant = "default" }) {
    return (
        <div className={`info-warning info-warning--${variant}`}>
            <div className="info-warning__icon">
                <img src={icon} alt="Attention" className="info-warning__img" />
            </div>
            
            <div className="info-warning__content">
                {title && (
                    <p className="info-warning__description">
                        <span className="info-warning__title">
                            {title}
                        </span>
                        {description}
                    </p>
                )}

                {!title && Array.isArray(description) && (
                    <div className="info-warning__descriptions">
                        {description.map((text, index) => (
                            <p key={index} className="info-warning__description">
                                {text}
                            </p>
                        ))}
                    </div>
                )}

                {important && (
                    <p className="info-warning__important">
                        {important}
                    </p>
                )}
            </div>
        </div>
    )
}

export default InfoWarning;