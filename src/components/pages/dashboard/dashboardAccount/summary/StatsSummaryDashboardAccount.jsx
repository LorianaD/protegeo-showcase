import { StatCard } from "@/components/ui";
import { formatCurrency } from "@/utils";

function StatsSummaryDashboardAccount({ section, statsData, date, previousBalanceDate, variant = "default" }) {
    return (
        <div className={`account-stats account-stats--${variant}`}>
            {section.stats.map((stat) => {
                const statDate = stat.name === "previousBalance"
                    ? previousBalanceDate
                    : date;

                return (
                    <StatCard
                        key={stat.name}
                        title={stat.title}
                        data={
                            stat.format === "currency"
                                ? formatCurrency(statsData[stat.name] ?? 0)
                                : statsData[stat.name] ?? 0
                        }
                        description={`${stat.description} ${statDate}`}
                        img={stat.img}
                        variant={stat.variant}
                    />
                );
            })}
        </div>
    );
}

export default StatsSummaryDashboardAccount;