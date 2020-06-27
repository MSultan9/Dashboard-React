import React from 'react';
import ChartDashboard from '../../components/chart/chart.component'
import './dashboard-page.styles.css'
import { messagesReceived, dayLabels, messagesFailed, messagesSent, callsSent, callsReceived } from "../../mockData";

class DashboardPage extends React.Component {
    state = {}
    render() {
        let messagesDatasets = [
            {
                label: "Messages Sent",
                data: messagesSent,
                fill: false,
                borderColor: "green"
            },
            {
                label: "Messages Received",
                data: messagesReceived,
                fill: false,
                borderColor: "blue"
            },
            {
                label: "Messages Failed",
                data: messagesFailed,
                fill: false,
                borderColor: "red"
            }
        ]

        let callsDatasets = [
            {
                label: "Calls Sent",
                data: callsSent,
                fill: false,
                borderColor: "green"
            },
            {
                label: "Calls Received",
                data: callsReceived,
                fill: false,
                borderColor: "blue"
            }
        ]
        return (
            <div className="container">
                <header>
                    <i className="fa fa-comment"></i>
                    <h1>Messages Dashboard</h1>
                </header>
                <ChartDashboard labels={dayLabels} datasets={messagesDatasets} />
                <header>
                    <i className="fa fa-phone"></i>
                    <h1>Calls Dashboard</h1>
                </header>
                <ChartDashboard labels={dayLabels} datasets={callsDatasets} />
            </div>
        );
    }
}

export default DashboardPage;