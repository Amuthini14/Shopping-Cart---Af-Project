import React from 'react';


const Content = () => {

return(

    <div className="content">

           
            <div className="container-fluid">
                <div className="row">
               
                    <div className="col-md-8">
                    
                        <div className="card">
                          
                            <div className="header">
                                <h4 className="title">Edit Employee</h4>
                            </div>
                            <div className="content">
                                <form>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label><h6>Employee ID</h6></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label><h6>First Name</h6></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label><h6>Last Name</h6></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1"><h6>Email address</h6></label>
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label><h6>City</h6></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">

                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label><h6>Username</h6></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="form-group">
                                                <label><h6>Password</h6></label>
                                                <input type="password" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-info btn-fill pull-right">Update Employee Details</button>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Striped Table with Hover</h4>
                                <p className="category">Here is a subtitle for this table</p>
                            </div>
                            <div className="content table-responsive table-full-width">
                        <table className="table table-hover table-striped">
                          <thead>
                                        <th>ID</th>
                                    	<th>Name</th>
                                    	<th>Salary</th>
                                    	<th>Country</th>
                                    	<th>City</th>
                         </thead>
                         <tbody>
                                        <tr>
                                        	<td>1</td>
                                        	<td>Dakota Rice</td>
                                        	<td>$36,738</td>
                                        	<td>Niger</td>
                                        	<td>Oud-Turnhout</td>
                                        </tr>
                                        <tr>
                                        	<td>2</td>
                                        	<td>Minerva Hooper</td>
                                        	<td>$23,789</td>
                                        	<td>Curaçao</td>
                                        	<td>Sinaai-Waas</td>
                                        </tr>
                                        <tr>
                                        	<td>3</td>
                                        	<td>Sage Rodriguez</td>
                                        	<td>$56,142</td>
                                        	<td>Netherlands</td>
                                        	<td>Baileux</td>
                                        </tr>
                                        <tr>
                                        	<td>4</td>
                                        	<td>Philip Chaney</td>
                                        	<td>$38,735</td>
                                        	<td>Korea, South</td>
                                        	<td>Overland Park</td>
                                        </tr>
                                        <tr>
                                        	<td>5</td>
                                        	<td>Doris Greene</td>
                                        	<td>$63,542</td>
                                        	<td>Malawi</td>
                                        	<td>Feldkirchen in Kärnten</td>
                                        </tr>
                                        <tr>
                                        	<td>6</td>
                                        	<td>Mason Porter</td>
                                        	<td>$78,615</td>
                                        	<td>Chile</td>
                                        	<td>Gloucester</td>
                                        </tr>
                                    </tbody>
                        </table>
                     
                  </div>
      
                 
                   </div>
                   </div>
        </div>

);

}

export default Content;