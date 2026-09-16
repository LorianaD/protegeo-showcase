function DashboardSectionHeader({ title, descriptions, variant = "default", notice }) {
    return (
        <header className={`dashboard-section-header dashboard-section-header--${variant}`}>
            <h3 className="dashboard-section-header__title">
                {title}
            </h3>

            <div className="dashboard-section-header__description">
                {Object.entries(descriptions).map(([key, description]) => (
                    <p
                        key={key}
                        className="dashboard-section-header__text"
                    >
                        {description}
                    </p>
                ))}
            </div>

            {notice && (
                <p className="dashboard-section-header__warning">
                    {notice}
                </p>
            )}
        </header>
    );
}

export default DashboardSectionHeader;