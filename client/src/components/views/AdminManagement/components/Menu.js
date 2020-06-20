import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Menu extends Component {
    render() {
        return (

        

            <div>
               <aside className="main-sidebar">
  {/* sidebar: style can be found in sidebar.less */}
  <section className="sidebar">
    {/* Sidebar user panel */}
  
    {/* search form */}
    <form action="#" method="get" className="sidebar-form">
      <div className="input-group">
        <input type="text" name="q" className="form-control" placeholder="Search..." />
        <span className="input-group-btn">
          <button type="submit" name="search" id="search-btn" className="btn btn-flat">
            <i className="fa fa-search" />
          </button>
        </span>
      </div>
    </form>
    {/* /.search form */}
    {/* sidebar menu: : style can be found in sidebar.less */}
    <ul className="sidebar-menu" data-widget="tree">
      <li className="header">MAIN NAVIGATION</li>
      <li className=" treeview ">
        <a href="#">
          <i className="fa fa-dashboard" /> <span>Dashboard</span>
         
        </a>
        
      </li>
    
      
     
     
      <li className="treeview">
        <a href="#">
          <i className="fa fa-users" />
          <span>Emploee Management</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>
        <ul className="treeview-menu">
          <li><a href="/addEmployee"><i className="fa fa-circle-o" /> Add Employee</a></li>
          <li><a href="/viewEmployee"><i className="fa fa-circle-o" /> View Employee</a></li>
         
        </ul>
      </li>

      <li className="treeview">
        <a href="#">
          <i className="fa fa-laptop" />
          <span>StoreManager Management</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>
        <ul className="treeview-menu">
          <li><a href="/addSManager"><i className="fa fa-circle-o" /> Add StoreManager</a></li>
          <li><a href="/viewSManager"><i className="fa fa-circle-o" /> View StoreManager</a></li>
         
        </ul>
      </li>
      <li className="treeview">
        <a href="#">
          <i className="fa fa-edit" /> <span>Category Management</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>
        <ul className="treeview-menu">
          <li><a href="/addCategory"><i className="fa fa-circle-o" /> Add Category</a></li>
          <li><a href="/viewCategory"><i className="fa fa-circle-o" /> View Category</a></li>
         
        </ul>
      </li>
    
     </ul>
  </section>
  {/* /.sidebar */}
</aside>
   
            </div>

           
        )
    }
}
