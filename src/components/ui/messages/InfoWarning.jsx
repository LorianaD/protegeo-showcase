import { IconBand } from "../badges";

function InfoWarning({ icon, iconColor, img, title, description, important, variant = "default" }) {
    return (
        <div className={`info-warning info-warning--${variant}`}>
            
            {(img || icon) && (
                <div className="info-warning__icon">
                    {img ? (
                        
                        <img src={img} alt="Attention" className="info-warning__img" />
                                        
                    ) : (
                        <IconBand
                            sign={icon}
                            color={iconColor}
                            alt={icon}
                        />
                    )}
                </div>
            )}

            <div className={`info-warning__content info-warning__content--${variant}`}>
                {title && (
                    <p className={`info-warning__description info-warning__description--${variant}`}>
                        <span className={`info-warning__title info-warning__title--${variant}`}>
                            {title}
                        </span>
                        <span className={`info-warning__description-description info-warning__description-description--${variant}`}>
                            {description}
                        </span>
                        
                    </p>
                )}

                {!title && Array.isArray(description) && (
                    <div className={`info-warning__description info-warning__description--${variant}`}>
                        {description.map((text, index) => (
                            <p key={index} className="info-warning__description-text">
                                {text}
                            </p>
                        ))}
                    </div>
                )}

                {!title && typeof description === "string" && (
                    <p className="info-warning__description">
                        {description}
                    </p>
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