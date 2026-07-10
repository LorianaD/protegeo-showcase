function InfoFieldGroup({ children, variant = "default" }) {
    return (
        <div className={`info-row info-row--${variant}`}>
            { children }
        </div>
    )
}

export default InfoFieldGroup;