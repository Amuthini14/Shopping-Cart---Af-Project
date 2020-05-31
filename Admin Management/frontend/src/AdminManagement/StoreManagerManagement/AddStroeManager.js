import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




export default class AddStoreManager extends Component {

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
                            <th>Action</th>
                        </tr>
                    </thead>
                   {
                    this.state.employees.map(function(currentEmp, i) {
                         return(
                    <tbody>
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
                                    <Link to={"/addManager/"+currentEmp._id}>Add to store manager</Link>
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
                          
                    </tbody>
                         )})
    }
                </table>
            </div>
            </div>
        )
    }
}