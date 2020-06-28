import React from 'react';
import MaterialTable from 'material-table';
import './table.styles.css'
import { ToastContainer, toast } from 'react-toastify';
import ModalComponent from '../modal/modal.component'
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
            openModal: false,
            selectedUser: null
        }

        this.tableIcons = {
            Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
            Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
            Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
            Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
            DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
            Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
            Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
            Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
            FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
            LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
            NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
            PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
            ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
            Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
            SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
            ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
            ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
        };
    }

    componentDidMount() {
        if (this.props.title === "Users List") {
            let storageData = localStorage.getItem('usersList')
            let usersList = JSON.parse(storageData)
            if (usersList)
                this.setState({ users: usersList })
        }
    }

    validate(data) {
        let keys = Object.keys(data).slice(0, 5)
        if (keys.length === 5) {
            for (let key of keys) {
                if (data[key].toString().trim() === '') {
                    return false
                }
            }
            return true
        } else
            return false
    }

    onRowAdded(newData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let validation = this.validate(newData)
                if (validation) {
                    resolve();
                    this.toastSuccess('User Added Successfully')
                    let allUsers = [...this.state.users]
                    allUsers.unshift(newData)
                    this.setState({ users: allUsers })
                    this.saveData()
                } else {
                    reject()
                    this.toastError()
                }
            }, 600);
        })
    }

    onRowUpdated(newData, oldData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let validation = this.validate(newData)
                if (validation) {
                    resolve();
                    this.toastSuccess('User Edited Successfully')
                    let allUsers = [...this.state.users]
                    allUsers[allUsers.indexOf(oldData)] = newData
                    this.setState({ users: allUsers })
                    this.saveData()
                } else {
                    reject()
                    this.toastError()
                }
            }, 600);
        })
    }

    onRowDeleted(oldData) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                this.toastSuccess('User Deleted Successfully')
                let allUsers = [...this.state.users]
                allUsers.splice(allUsers.indexOf(oldData), 1);
                this.setState({ users: allUsers })
                this.saveData()
            }, 600);
        })
    }

    saveData() {
        localStorage.setItem('usersList', JSON.stringify(this.state.users));
    }

    toastSuccess(text) {
        toast.success(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    toastError() {
        toast.error('Please Fill All Fields', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    handleClose = (e) => {
        if (e.target.classList.contains("modal-container"))
            this.setState({ openModal: false })
    }

    render() {
        return (
            <div className="table-container">
                <ToastContainer />
                <ModalComponent open={this.state.openModal} closeModal={this.handleClose} data={this.state.selectedUser} />
                <MaterialTable
                    columns={this.props.columns}
                    data={this.state.users}
                    title={this.props.title}
                    icons={this.tableIcons}
                    actions={[
                        {
                            icon: AccountCircleIcon,
                            tooltip: 'View',
                            onClick: (event, rowData) => this.setState({ openModal: true, selectedUser: [rowData] }),
                        }
                    ]}
                    editable={{
                        onRowAdd: (newData) => this.onRowAdded(newData),
                        onRowUpdate: (newData, oldData) => this.onRowUpdated(newData, oldData),
                        onRowDelete: (oldData) => this.onRowDeleted(oldData)
                    }}
                    options={{
                        actionsColumnIndex: -1
                    }}
                />
            </div>
        );
    }
}

export default Table;