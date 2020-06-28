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
                    {this.props.data && this.props.data.firstName
                    }
                </div>
            </div>
        );
    }
}

export default ModalComponent;