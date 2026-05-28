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