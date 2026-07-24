function BadgeStatus({ status, variant = "default" }) {
    return (
        <div className={`badge-status badge-status--${variant}`}>
            <p className={`badge-status__text badge-status__text--${variant}`}>
                { status }
            </p>
        </div>
    )
}

export default BadgeStatus;