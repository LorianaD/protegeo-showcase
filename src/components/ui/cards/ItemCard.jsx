function ItemCard({ title, description, lists = [], infos = [], links = [], conclusion, linkPosition = "bottom" }) {
    
    const renderLinks = () => (
        links.map((link, index) => (
            <a
                key={index}
                href={link.href}
                className="item-card__link"
                target="_blank"
                rel="noopener noreferrer"
            >
                {link.label}
            </a>
        ))
    );
    
    return (
        <article className="item-card">
            <h3 className="item-card__title">{title}</h3>

            {description && (
                <p className="item-card__description">
                    {description}
                </p>
            )}

            {linkPosition === "beforeLists" && renderLinks()}

            {lists.map((list, index) => (
                <div key={index} className="item-card__group">
                    {list.title && (
                        <p className="item-card__group-title">{list.title}</p>
                    )}

                    <ul className="item-card__list">
                        {list.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="item-card__list-item">
                                {typeof item === "string" ? (
                                    item
                                ) : (
                                    <>
                                        <div className="item-card__row">
                                            <strong className="item-card__label">
                                                {item.label}
                                            </strong>
                                                {item.details}
                                        </div>

                                        {item.text && (
                                            item.textAsParagraph ? (
                                                <p className="item-card__extra">{item.text}</p>
                                            ) : (
                                                <> {item.text}</>
                                            )
                                        )}

                                        {item.href && (
                                            <a href={item.href} className="item-card__link" target="_blank" rel="noopener noreferrer">
                                                {item.href}
                                            </a>
                                        )}

                                        {item.extra && (
                                            <p className="item-card__extra">
                                                {item.extra}
                                            </p>
                                        )}
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {infos.map((info, index) => (
                <p key={index} className="item-card__info">
                    <span className="item-card__info-title">{info.label} : </span>
                    {info.value}
                </p>
            ))}

            {linkPosition === "bottom" && renderLinks()}

            {conclusion && (
                <p className="item-card__description">
                    { conclusion }
                </p>
            )}
        </article>
    )
}

export default ItemCard;