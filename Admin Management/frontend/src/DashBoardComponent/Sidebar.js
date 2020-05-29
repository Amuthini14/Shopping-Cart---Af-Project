import React from 'react';


const Sidebar = () => {

return(

    <div className="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">

   

    	<div className="sidebar-wrapper">
            <div className="logo">
                <a href="#" className="simple-text">
                    Admin Dashboard
                </a>
            </div>

            <ul className="nav">
                <li className="active">
                    <a href="dashboard.html">
                        <i className="pe-7s-graph"></i>
                        <p>Dashboard</p>
                    </a>
                </li>
                
                
                <li className="nav">
                    <a className="nav-link" data-toggle="collapse" href="#menu3" >
                       
                    <i class="pe-7s-id"></i>
                        <p>Store Manager &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Management 
                            <b class="caret" ></b></p>
                    </a>
                    <div className="collapse" id="menu3" style={{}}>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="navbar-link" href="" >
                                    <span className="sidebar-normal" href="#"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Employee </p></span>

                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="navbar-link" href="" >
                                    <span className="sidebar-normal" href="#"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit Employee</p> </span>
                                </a>
                            </li>
                         </ul>
                      
                    </div>
                </li>
                <li>
                    <a href="table.html">
                        <i className="pe-7s-note2"></i>
                        <p>Table List</p>
                    </a>
                </li>
                <li>
                    <a href="typography.html">
                        <i className="pe-7s-news-paper"></i>
                        <p>Typography</p>
                    </a>
                </li>
                <li>
                    <a href="icons.html">
                        <i className="pe-7s-science"></i>
                        <p>Icons</p>
                    </a>
                </li>
                <li>
                    <a href="maps.html">
                        <i className="pe-7s-map-marker"></i>
                        <p>Maps</p>
                    </a>
                </li>
                <li>
                    <a href="notifications.html">
                        <i className="pe-7s-bell"></i>
                        <p>Notifications</p>
                    </a>
                </li>
				
            </ul>
    	</div>
    </div>

);

}

export default Sidebar;