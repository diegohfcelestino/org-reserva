import React from 'react'
import Chart from "react-apexcharts";

const BarChart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Veiculo 1', 'Veiculo 2', 'Vericulo 3', 'Veiculo 4']
        },
        series: [
            {
                name: "% Uso",
                data: [43.6, 67.1, 67.7, 45.6]
            }
        ]
    };

    return (
        <Chart
            options={{ ...options, xaxis: mockData.labels }}
            series={mockData.series}
            type="bar"
            height="200"
        />
    );
}

export default BarChart;