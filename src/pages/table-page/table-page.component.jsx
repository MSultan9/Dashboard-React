import React from 'react';
import Table from '../../components/table/table.component'
import './table-page.styles.css'
import { usersList } from "../../mockData";


class TablePage extends React.Component {
    constructor() {
        super();
        this.columns =
            [
                { title: 'First Name', field: 'firstName' },
                { title: 'Last Name', field: 'lastName' },
                { title: 'Nationality', field: 'nationality' },
                { title: 'Phone Number', field: 'phone' },
                { title: 'Last Month Bill', field: 'lastMonthBill', type: 'numeric' }
            ]
    }
    render() {
        return (
            <div className="page-container">
                <Table users={usersList} columns={this.columns} />
            </div>
        );
    }
}

export default TablePage;