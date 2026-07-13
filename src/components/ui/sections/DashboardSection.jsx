import { Button } from "../buttons";

function DashboardSection({ title, actionLabel, onAction, children }) {
    return (
        <section className="dashboard-section">
            <div className="dashboard-section__header">
                <h3 className="dashboard-section__title">
                    { title }
                </h3>
                {actionLabel && (
                    <Button label={ actionLabel } onClick={onAction} variant="secondary"/>
                )}
            </div>
            <div className="dashboard-section__body">
                { children }
            </div>
        </section>
    )
}

export default DashboardSection;