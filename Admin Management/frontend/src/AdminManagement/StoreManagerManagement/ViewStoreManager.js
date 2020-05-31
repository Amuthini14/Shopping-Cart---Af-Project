import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = props => (
    <tr>
        <td>{props.employee.EmpId}</td>
        <td>{props.employee.SmId}</td>
        <td>{props.employee.first_name}</td>
        <td>{props.employee.last_name}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.city}</td>
        <td>{props.employee.uname}</td>
        <td>
            <Link to={"/editSManager/"+props.employee._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/deleteSManager/"+props.employee.EmpId}>Delete</Link>
        </td>
       
    </tr>
)


export default class ViewEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {smanagers: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/storeManager/')
            .then(response => {
                this.setState({smanagers: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate(){

        axios.get('http://localhost:4000/storeManager/')
        .then(response => {
            this.setState({smanagers: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })

    }

   

    employeeList() {
        return this.state.smanagers.map(function(currentEmp, i) {
            return <Employee employee={currentEmp} key={i} />;
        });
    }
    render() {
        return (
            <div>
               <div>
                <h3>Store Manager List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>StoreManager ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>city</th>
                            <th>User Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.employeeList() }
                    </tbody>
                    
                </table>
            </div>
            </div>
        )
    }
}