import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import AddEmployee from "./AddEmployee";
import ViewEmployee from "./ViewEmployee";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";
import AddCategory from "./CategoryManagement/AddCategory";
import ViewCategory from "./CategoryManagement/ViewCategory";
import EditCategory from "./CategoryManagement/EditCategory";
import DeleteCategory from "./CategoryManagement/DeleteCategory";
import AddStoreManager from "./StoreManagerManagement/AddStroeManager";
import ViewStoreManager from "./StoreManagerManagement/ViewStoreManager";
import AddManager from './StoreManagerManagement/addStoreManager';
import EditStoreManager from "./StoreManagerManagement/EditStoreManager";
import DeleteStoreManager from "./StoreManagerManagement/DeleteStoreManager";
import Adminlogin from "./AdminSignIn";


class Admin extends Component {
  render() {
    return (
      <Router>
       
        <div className="container">
        <div className={"jumbotron text-center"} >
                            <h1>Admin Dashboard</h1>
                        </div>
             <div className="container-fluid">
                   
              
             
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
         
           
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
               
                <li className="navbar-item">
                  <Link to="/addEmployee" className="nav-link"><b>Add Employee</b></Link>
                </li>
               

                 <li className="navbar-item">
                  <Link to="/viewEmployee" className="nav-link"><b>View Employee</b></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/viewCategory" className="nav-link"><b>View Category</b></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/addCategory" className="nav-link"><b>Add Category</b></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/addSManager" className="nav-link"><b>Add Store Manager</b></Link>
                </li>
                <li className="navbar-item">
                  <Link to="/viewSManager" className="nav-link"><b>view Store Manager</b></Link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="navbar-item">
                  <Link to=" " className="nav-link"><b>Logout</b></Link>
                </li>
                
                

                
                
              </ul>
            </div>
          </nav>

         
          <Route path="/addEmployee" component={AddEmployee}  />
          <Route path="/viewEmployee" exact component={ViewEmployee}  />
          <Route path="/editEmployee/:id" component={EditEmployee}  />
          <Route path="/deleteEmployee/:id" component={DeleteEmployee}  />
          <Route path="/addCategory" component={AddCategory} />
          <Route path="/viewCategory" component={ViewCategory} />
          <Route path="/editCategory/:id" component={EditCategory} />
          <Route path="/deleteCategory/:id" component={DeleteCategory} />
          <Route path="/addSManager" component={AddStoreManager}  />
          <Route path="/addManager/:id" component={AddManager}  />
          <Route path="/viewSManager" component={ViewStoreManager}  />
          <Route path="/editSManager/:id" component={EditStoreManager}  />
          <Route path="/deleteSManager/:id" component={DeleteStoreManager}  />
          <Route path="/adminlogin" component={Adminlogin}  />

         

         </div>
        </div>
        
      </Router>
    );
  }
}

export default Admin;
