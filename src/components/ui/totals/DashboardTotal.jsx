function DashboardTotal({ label, value, variant = "default" }) {
    const className = `dashboard-total dashboard-total--${variant}`;

    return (
        <div className={className}>
            <span>{label}</span>
            <strong>{value}</strong>
        </div>
    );
}

export default DashboardTotal;