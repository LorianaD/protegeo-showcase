import { Button } from "../buttons";

function DashboardSection({ title, actionLabel, onAction, children, addLabel, onAdd, variant="default" }) {
    return (
        <section className={`dashboard-section dashboard-section--${variant}`}>
            {title && (
                <div className="dashboard-section__header">
                    <h3 className="dashboard-section__title">
                        { title }
                    </h3>
                    <div className="dashboard-section__actions">
                        {addLabel && (
                            <Button label={addLabel} onClick={onAdd} variant="primary"/>
                        )}
                        {actionLabel && (
                            <Button label={ actionLabel } onClick={onAction} variant="secondary"/>
                        )}                    
                    </div>

                </div>
            )}
            <div className="dashboard-section__body">
                { children }
            </div>
        </section>
    )
}

export default DashboardSection;