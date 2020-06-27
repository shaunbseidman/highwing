
import React, { Component } from 'react'
import Chart from "chart.js";

export default class PieChart extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                labels: ["One", "Two", "Three"],
                datasets: [
                    {
                        label: "proportion",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
