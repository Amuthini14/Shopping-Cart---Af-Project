import React, { Component } from 'react'

export default class Header extends Component {




  
    render() {
        return (
            <div>
              <header className="main-header">
  {/* Logo */}
  <a href="index2.html" className="logo">
    {/* mini logo for sidebar mini 50x50 pixels */}
    <span className="logo-mini"><b>A</b>D</span>
    {/* logo for regular state and mobile devices */}
    <span className="logo-lg">Admin Dashboard</span>
  </a>
  {/* Header Navbar: style can be found in header.less */}
  <nav className="navbar navbar-static-top">
    {/* Sidebar toggle button*/}
    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
      <span className="sr-only">Toggle navigation</span>
    </a>
    {/* Navbar Right Menu */}
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
        {/* Messages: style can be found in dropdown.less*/}
       
        {/* Tasks: style can be found in dropdown.less */}
      
        {/* User Account: style can be found in dropdown.less */}
        <li className="dropdown user user-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
           
            <span className="hidden-xs">Admin</span>
          </a>
        
        </li>
        {/* Control Sidebar Toggle Button */}
        <li className="dropdown user user-menu">
          <a href="/login" >
            
            <span className="hidden-xs">Sign out</span>
          </a>
          </li>
       
      </ul>
    </div>
  </nav>
</header>

            </div>
        )
    }
}
