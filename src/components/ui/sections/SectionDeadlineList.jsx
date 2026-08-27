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
                    <div className="section-deadline-list__label">
                        <span className="section-deadline-list__status-text">
                            {deadline.label}
                        </span>
                    </div>

                    <div className="section-deadline-list__person">
                        <span className="section-deadline-list__status-text">
                            {deadline.fullname}
                        </span>
                    </div>

                    <div className={`section-deadline-list__status section-deadline-list__status--${deadline.variant}`}>
                        <span className="section-deadline-list__status-text">
                            {deadline.status}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SectionDeadlineList;