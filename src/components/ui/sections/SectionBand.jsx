import { IconBand } from "../badges";

function SectionBand({ icon, img, sign, iconColor, title, description, variant = "blue" }) {
    return (
        <div className={`section-band section-band--${variant}`}>
            {(img || icon) && (
                <div className="section-band__icon">
                    {img ? (
                        <img
                            src={img}
                            alt={sign}
                            className="section-band__img"
                        />
                    ) : (
                        <IconBand
                            sign={icon}
                            color={iconColor}
                        />
                    )}
                </div>
            )}

            <div className={`section-band__content section-band__content--${variant}`}>
                {title && (
                    <p className="section-band__title">
                        {title}
                    </p>
                )}

                {description && (
                    <p className={`section-band__description section-band__description--${variant}`}>
                        {description}
                    </p>
                )}
            </div>
        </div>
    )
}

export default SectionBand;