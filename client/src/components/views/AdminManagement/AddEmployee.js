import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Menu from './components/Menu';


export  class AddEmployee extends Component {


    constructor(props) {
        super(props);
        this.state = {
            EmpId: '',
            first_name: '',
            last_name: '',
            email: '',
            city: '',
            uname: '',
            password: '',
            created: ''
        }

        this.onChangeEmpID = this.onChangeEmpID.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeUname = this.onChangeUname.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       
    }

    onChangeEmpID(e) {
        this.setState({
            EmpId: e.target.value
        });
    }

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    onChangeUname(e) {
        this.setState({
            uname: e.target.value
        });
    }

    onChangepassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        

        
        const newEmployee = {
            EmpId: this.state.EmpId,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            city: this.state.city,
            uname: this.state.uname,
            password: this.state.password,
            created: false
        }

        axios.post('http://localhost:5000/employee/add', newEmployee)
            .then(res => console.log(res.data));
        this.setState({
            EmpId: '',
            first_name: '',
            last_name: '',
            email: '',
            city: '',
            uname: '',
            password: ''
        })
        this.props.history.push('/viewEmployee');
    }

    render() {
        return (
           

<div>

                <Header />
                  <Menu />  
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
           value={this.state.EmpId}
           onChange={this.onChangeEmpID}
        placeholder="Enter Employee ID" />
</div> 
<div className="form-group">
 <label >First Name</label>
 <input type="text" className="form-control" 
               value={this.state.first_name}
               onChange={this.onChangeFirstName}
             placeholder="Enter First Name" />
</div>
<div className="form-group">
 <label >Last Name</label>
 <input type="text" className="form-control"
                     value={this.state.last_name}
                     onChange={this.onChangeLastName}
                  placeholder="Enter Last Name" />
</div>
<div className="form-group">
 <label htmlFor="exampleInputEmail1">Email address</label>
 <input type="email" className="form-control" 
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                placeholder="Enter Email" />
</div>
<div className="form-group">
 <label >City</label>
 <input type="text" className="form-control"
                    value={this.state.city}
                    onChange={this.onChangeCity}
                 placeholder="Enter City" />
</div>
<div className="form-group">
 <label >User Name</label>
 <input type="text" className="form-control" 
                      value={this.state.uname}
                      onChange={this.onChangeUname}
                 placeholder="Enter User Name" />
</div>
<div className="form-group">
 <label htmlFor="exampleInputPassword1">Password</label>
 <input type="password" className="form-control" 
                         value={this.state.password}
                         onChange={this.onChangepassword}
              placeholder="Password" />
</div>

</div>
{/* /.box-body */}
<div className="box-footer">
<button type="submit" className="btn btn-primary">Create Employee</button>
</div>
</form>
</div>
</div></div>
</section>
</div>

</div>
        )
    }
}

export default AddEmployee;