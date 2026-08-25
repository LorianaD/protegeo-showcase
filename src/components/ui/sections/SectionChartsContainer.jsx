import { BadgeStatus } from "../badges";

function SectionChartsContainer({ title, children }) {
    return (
        <div className="dashboard-chart">
            <div className="dashboard-chart__header">
                <h2 className="dashboard-chart__title">
                    { title }
                </h2>
                <BadgeStatus/>
            </div>

            <div className="dashboard-chart__content">
                { children }
            </div>
        </div>
    );
}

export default SectionChartsContainer;