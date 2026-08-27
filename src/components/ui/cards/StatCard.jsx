function StatCard({ title, data, description, variant = "default", img }) {
    return (
        <div className={`stat-card stat-card--${variant}`}>

            {img && (
                <div className="stat-card__icon">
                    <img
                        src={img}
                        alt=""
                        className={`stat-card__img stat-card__img--${variant}`}
                    />                    
                </div>
            )}
            
            <div className="stat-card__text">
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

        </div>
    );
}

export default StatCard;