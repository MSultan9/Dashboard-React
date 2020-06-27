import React from 'react';
import './modal.styles.css'
import Table from '../table/table.component'

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.columns =
            [
                { title: 'First Name', field: 'firstName' },
                { title: 'Last Name', field: 'lastName' },
                { title: 'Nationality', field: 'nationality' },
                { title: 'Phone Number', field: 'phone' },
                { title: 'Last Month Bill', field: 'lastMonthBill', type: 'numeric' },
                { title: 'Address', field: 'address' },
                { title: 'Number of Services Subscribed', field: 'services', type: 'numeric' },
                { title: 'Age', field: 'age', type: 'numeric' }
            ]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.open !== this.props.open)
            this.myRef.current.classList.toggle('show-modal')
    }

    render() {
        return (
            <div ref={this.myRef} className="modal-container" onClick={this.props.closeModal}>
                <div className="modal-text">
                    {this.props.data &&
                        <Table users={this.props.data} columns={this.columns} title={"User Details"} />
                    }
                </div>
            </div>
        );
    }
}

export default ModalComponent;