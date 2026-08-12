function SectionDeadlineList({ deadlines = [], emptyMessage = "" }) {
    if (deadlines.length === 0) {
        return (
            <p className="section-deadline-list__empty">
                {emptyMessage}
            </p>
        );
    }

    return (
        <div className="section-deadline-list">
            {deadlines.map((deadline) => (
                <div key={deadline.id} className="section-deadline-list__item">
                    <span className="section-deadline-list__label">
                        {deadline.label}
                    </span>

                    <span className="section-deadline-list__person">
                        {deadline.fullname}
                    </span>

                    <span className={`section-deadline-list__status section-deadline-list__status--${deadline.variant}`}>
                        {deadline.status}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default SectionDeadlineList;