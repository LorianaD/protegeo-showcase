function IconBand({ sign, color = "blue" }) {
    return (
        <div className={`icon-band icon-band--${color}`}>
            <span className="icon-band__sign">
                { sign }
            </span>
        </div>
    )
}

export default IconBand;