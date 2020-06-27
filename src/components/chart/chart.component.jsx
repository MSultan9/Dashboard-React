import React from 'react';
import Chart from "chart.js";
import './chart.styles.css'

class ChartDashboard extends React.Component {

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: this.props.labels,
                datasets: this.props.datasets,
            },
            redraw: true
        });
    }

    render() {
        return (
            <div className="chart-container">
                <canvas
                    ref={this.chartRef}
                />
            </div>
        );
    }
}

export default ChartDashboard;