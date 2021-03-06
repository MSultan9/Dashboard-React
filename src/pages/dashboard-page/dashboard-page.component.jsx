import React from 'react';
import ChartDashboard from '../../components/chart/chart.component'
import './dashboard-page.styles.css'
import { messagesReceived, dayLabels, messagesFailed, messagesSent, callsSent, callsReceived } from "../../mockData";

class DashboardPage extends React.Component {
    constructor() {
        super();
        this.messagesDatasets = [
            {
                label: "Messages Sent",
                data: messagesSent,
                fill: false,
                borderColor: "#38d39f"
            },
            {
                label: "Messages Received",
                data: messagesReceived,
                fill: false,
                borderColor: "#0c4da6"
            },
            {
                label: "Messages Failed",
                data: messagesFailed,
                fill: false,
                borderColor: "rgb(234,34,40)"
            }
        ]

        this.callsDatasets = [
            {
                label: "Calls Sent",
                data: callsSent,
                fill: false,
                borderColor: "#38d39f"
            },
            {
                label: "Calls Received",
                data: callsReceived,
                fill: false,
                borderColor: "#0c4da6"
            }
        ]
    }
    render() {
        return (
            <div className="dashboard-container">
                <header>
                    <i className="fa fa-comment"></i>
                    <h1 className="m-0">Messages Chart</h1>
                </header>
                <ChartDashboard labels={dayLabels} datasets={this.messagesDatasets} />
                <header>
                    <i className="fa fa-phone"></i>
                    <h1 className="m-0">Calls Chart</h1>
                </header>
                <ChartDashboard labels={dayLabels} datasets={this.callsDatasets} />
            </div>
        );
    }
}

export default DashboardPage;