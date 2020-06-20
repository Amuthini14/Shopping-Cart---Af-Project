import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Menu from './components/Menu';

const Employee = props => (
    <tr>
        <td>{props.employee.EmpId}</td>
        <td>{props.employee.first_name}</td>
        <td>{props.employee.last_name}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.city}</td>
        <td>{props.employee.uname}</td>
        <td>
        <form action={"/editEmployee/"+props.employee._id}>
        <button type="submit" className="btn btn-primary">Edit</button>
        </form>
        </td>
        <td>
        <form action={"/deleteEmployee/"+props.employee._id}>
        <button type="submit" className="btn btn-danger">Delete</button>
        </form>
        </td>
       
    </tr>
)


export default class ViewEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/employee/')
            .then(response => {
                this.setState({employees: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate(){

        axios.get('http://localhost:5000/employee/')
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
                 <Header />
                  <Menu />  

                <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header"  >
    <h1>
      Employee Managment
     
    </h1>
    <ol className="breadcrumb">
      <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
      <li><a href="#">Tables</a></li>
      <li className="active">Simple</li>
    </ol>
  </section>
  {/* Main content */}
  <section className="content"  >
    <div className="row">
      <div className="col-md-12">
        <div className="box">
          <div className="box-header with-border">
            <h3 className="box-title">View Employee</h3>
          </div>
          {/* /.box-header */}
          <div className="box-body">
            <table className="table table-bordered">
              <tbody><tr>
                  <th >Employee ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th >Email</th>
                  <th>city</th>
                  <th>User Name</th>
                  <th>Action</th>
                  
                </tr>
                
                        { this.employeeList() }
                   
              </tbody></table>
          </div>
        </div></div></div></section></div>

            </div>



           
        )
    }
}