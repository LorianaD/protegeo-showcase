import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function ExpenseBreakdownChart({ data, labels, colors }) {
    const chartData = {
        labels: data.map((item) => labels[item.category] ?? item.category),
        datasets: [
            {
                data: data.map((item) => item.amount),
                borderWidth: 0,
                backgroundColor: colors,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "0%",
        plugins: {
            legend: {
                display: true,
                position: "right",
                labels: {
                    boxWidth: 12,
                    boxHeight: 12,
                    padding: 12,
                },
            },
        },
    };

    return (
        <Doughnut
            data={chartData}
            options={options}
        />
    );
}

export default ExpenseBreakdownChart;