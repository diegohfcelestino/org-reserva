import Chart from "react-apexcharts";

const DonutChart = () => {

    const mockData = {
        series: [60, 90],
        labels: ['Sala Maior', 'Sala Menor']
    }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="200"
        />
    );
}

export default DonutChart;