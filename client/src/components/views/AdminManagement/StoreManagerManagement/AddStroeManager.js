import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Menu from '../components/Menu';



export default class AddStoreManager extends Component {

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

   

    
    
    render() {
        return (
            

<div>
<Header />
                  <Menu /> 
<div className="content-wrapper">
{/* Content Header (Page header) */}
<section className="content-header"  >
<h1>
Store Manager Managment

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
<h3 className="box-title">Create Store Manager </h3>
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

{
                    this.state.employees.map(function(currentEmp, i) {
                         return(
                   
                        <tr key={i}> 
                       <td>{currentEmp.EmpId}</td>
                       <td>{currentEmp.first_name}</td>
                       <td>{currentEmp.last_name}</td>
                       <td>{currentEmp.email}</td>
                       <td>{currentEmp.city}</td>
                       <td>{currentEmp.uname}</td>

                   
                              
                               {(() => {
                                if (!currentEmp.created) {
                                  return (
                                    <td>
                                    
                                    <form action={"/addManager/"+currentEmp._id}>
        <button type="submit" className="btn btn-primary">Add to store manager</button>
        </form>
                                    </td>
                               
                                  )
                                }
                                  else{
                                      return(
                                         <td>Already Created</td>
                                      )
                                  }
                                
                              })()}
                        </tr>
                          
                  
                         )})
    }
   
</tbody></table>
</div>
</div></div></div></section></div>

</div>
        )
    }
}