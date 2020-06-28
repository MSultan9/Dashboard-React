import React from 'react';
import './modal.styles.css'

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
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
                        <div className="profile">
                            <div className="text-center">
                                <h4>{this.props.data.firstName} {this.props.data.lastName}, {this.props.data.age}</h4>
                                <h6>{this.props.data.nationality}</h6>
                            </div>
                            <div className="info">
                                <div>
                                    <i className="fa fa-address-card"></i>
                                    <div className="info-text">
                                        <div>Address</div>
                                        <div>{this.props.data.address}</div>
                                    </div>
                                </div>
                                <div>
                                    <i className="fa fa-phone"></i>
                                    <div className="info-text">
                                        <div>Phone Number</div>
                                        <div>{this.props.data.phone}</div>
                                    </div>
                                </div>
                                <div>
                                    <i className="fa fa-list-ol"></i>
                                    <div className="info-text">
                                        <div>Services Subscribed</div>
                                        <div>{this.props.data.services}</div>
                                    </div>
                                </div>
                                <div>
                                    <i className="fa fa-money-bill"></i>
                                    <div className="info-text">
                                        <div>Last Month's Bill</div>
                                        <div>{this.props.data.lastMonthBill}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default ModalComponent;