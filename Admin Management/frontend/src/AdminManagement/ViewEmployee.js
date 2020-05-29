import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = props => (
    <tr>
        <td>{props.employee.EmpId}</td>
        <td>{props.employee.first_name}</td>
        <td>{props.employee.last_name}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.city}</td>
        <td>{props.employee.uname}</td>
        <td>
            <Link to={"/editEmployee/"+props.employee._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/deleteEmployee/"+props.employee._id}>Delete</Link>
        </td>
       
    </tr>
)


export default class ViewEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/employee/')
            .then(response => {
                this.setState({employees: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate(){

        axios.get('http://localhost:4000/employee/')
        .then(response => {
            this.setState({employees: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })

    }

   

    employeeList() {
        return this.state.employees.map(function(currentEmp, i) {
            return <Employee employee={currentEmp} key={i} />;
        });
    }
    render() {
        return (
            <div>
               <div>
                <h3>Employee List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
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