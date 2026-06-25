import { StatCard } from "@/components/ui/cards";

function StatsSection({ stats = [], className = "" }) {
    return (
        <section className={`stats-section ${className}`}>
            {stats.map((stat) => (
                <StatCard
                    key={stat.title}
                    title={stat.title}
                    data={stat.data}
                    description={stat.description}
                    variant={stat.variant}
                />
            ))}
        </section>
    );
}

export default StatsSection;