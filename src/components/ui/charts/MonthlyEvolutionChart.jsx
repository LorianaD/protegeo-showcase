import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
);

function MonthlyEvolutionChart({ data, labels, colors }) {
    const chartData = {
        labels: data.map((item) => item.month),
        datasets: [
            {
                label: labels.resources,
                data: data.map((item) => item.resources),
                backgroundColor: colors.resources,
                borderRadius: 8,
                borderSkipped: false,
                barPercentage: 0.65,
                categoryPercentage: 0.75,
            },
            {
                label: labels.expenses,
                data: data.map((item) => item.expenses),
                backgroundColor: colors.expenses,
                borderRadius: 8,
                borderSkipped: false,
                barPercentage: 0.65,
                categoryPercentage: 0.75,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    color: "#6B7280",
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
            },
        },
    };

    return (
        <Bar
            data={chartData}
            options={options}
        />
    );
}

export default MonthlyEvolutionChart;