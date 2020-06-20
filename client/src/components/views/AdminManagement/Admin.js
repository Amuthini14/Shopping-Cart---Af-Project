import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";


import Header from './components/Header';
import Menu from './components/Menu';
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
      <div>
       
      
        <Header />
        <Menu />  
       
     
      
    
       

         
          <Route path="/addEmployee" component={AddEmployee}  />
          <Route path="/viewEmployee"  component={ViewEmployee}  />
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
        
      </Router>
    );
  }
}

export default Admin;
