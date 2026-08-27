function InfoCard({ title, value, variant = "default" }) {
    return (
        <div className={`info-card info-card--${variant}`}>
            <p className="info-card__title">
                {title}
            </p>

            <p className={`info-card__value info-card__value--${variant}`}>
                {value}
            </p>
        </div>
    );
}

export default InfoCard;