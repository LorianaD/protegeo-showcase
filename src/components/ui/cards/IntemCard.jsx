function ItemCard({ title, description, lists = [], infos = [] }) {
    return (
        <article className="item-card">
            <h3 className="item-card__title">{title}</h3>

            {description && (
                <p className="item-card__description">
                    {description}
                </p>
            )}

            {lists.map((list, index) => (
                <div key={index} className="item-card__group">
                    {list.title && (
                        <p className="item-card__group-title">{list.title}</p>
                    )}

                    <ul className="item-card__list">
                        {list.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="item-card__list-item">
                                {item}
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
        </article>
    )
}

export default ItemCard;