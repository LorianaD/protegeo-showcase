import { StatCard } from "@/components/ui";
import { formatCurrency } from "@/utils";

function StatsDashboardAccount({ section, statsData, date, variant = "default" }) {
    return (
        <div className={`account-stats account-stats--${variant}`}>
            {section.stats.map((stat) => (
                <StatCard
                    key={stat.name}
                    title={stat.title}
                    data={stat.format === "currency" ? formatCurrency(statsData[stat.name] ?? 0) : statsData[stat.name] ?? 0}
                    description={`${stat.description} ${date}`}
                    img={stat.img}
                    variant={stat.variant}
                />
            ))}
        </div>
    );
}

export default StatsDashboardAccount;