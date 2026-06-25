function StatCard({ title, data, description, variant = "default" }) {
    return (
        <div className={`stat-card stat-card--${variant}`}>
            
            {title && (
                <p className={`stat-card__title stat-card__title--${ variant }`}>
                    {title}
                </p>
            )}

            <p className={`stat-card__data stat-card__data--${ variant }`}>
                {data}
            </p>

            {description && (
                <p className={`stat-card__description stat-card__description--${ variant }`}>
                    {description}
                </p>
            )}

        </div>
    );
}

export default StatCard;