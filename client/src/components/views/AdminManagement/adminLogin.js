import React, { Component } from "react";
import axios from "axios";



class AdminSignIn extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      adminID: "",
      email: "",
      password: "",
      userType: ""
    };
  }
  onChangeID = e => {
    this.setState({
      adminID: e.target.value
    });
  };

  onChangeUserType = e => {
    this.setState({
      userType: e.target.value
    });
  };

  onChangePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const new_admin = {
      adminID: this.state.adminID,
      password: this.state.password
    };

    if (!new_admin.adminID) {
      alert("Enter Admin ID");
    } else if (!new_admin.password) {
      alert("Enter Password");
    } else if (!new_admin.adminID && !new_admin.password) {
      alert("Enter Admin Credentials");
    } else {
      axios
        .post("http://localhost:5000/admin/login", new_admin)
        .then(res => {
          if (res.status === 200) {
            alert("Login Success! Welcome, " + this.state.adminID);
            this.props.history.push("/viewEmployee");
          } else {
            alert("Login Failed! Please try again!");
          }
        });
    }
  };

  render() {
    return (
     


<div>
<div className="content-wrapper">
{/* Content Header (Page header) */}
<section className="content-header">
<h1>
Employee Management

</h1>

</section>
{/* Main content */}
<section className="content">
<div className="row">
{/* left column */}
<div className="col-md-7">
{/* general form elements */}
<div className="box box-primary">
<div className="box-header with-border">
<h3 className="box-title">Add Employee</h3>
</div>
{/* /.box-header */}
{/* form start */}
<form role="form"  onSubmit={this.onSubmit}>
<div className="box-body">
<div className="form-group">
 <label >Employee ID</label>
 <input type="text"    className="form-control"
           value={this.state.adminID}
           onChange={this.onChangeID}
        placeholder="Enter Employee ID" />
</div> 

<div className="form-group">
 <label htmlFor="exampleInputPassword1">Password</label>
 <input type="password" className="form-control" 
                         value={this.state.password}
                         onChange={this.onChangePassword}
              placeholder="Password" />
</div>

</div>
{/* /.box-body */}
<div className="box-footer">
<button type="submit" className="btn btn-primary">Login</button>
</div>
</form>
</div>
</div></div>
</section>
</div>

</div>
    );
  }
}

export default AdminSignIn;
