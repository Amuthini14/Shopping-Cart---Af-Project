import React, {Component} from 'react';
import axios from 'axios';

export default class AddManager extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmpID = this.onChangeEmpID.bind(this);
        this.onChangeSMID = this.onChangeSMID.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeUname = this.onChangeUname.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            EmpId: '',
            SmId: '',
            first_name: '',
            last_name: '',
            email: '',
            city: '',
            uname: '',
            password: ''
        }

    
    }

    componentDidMount() {
        axios.get('http://localhost:4000/employee/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    EmpId: response.data.EmpId,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                    city: response.data.city,
                   
                    
                })
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeEmpID(e) {
        this.setState({
            EmpId: e.target.value
        });
    }

    onChangeSMID(e){
        this.setState({
            SmId: e.target.value
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

        const Manager = {
            EmpId: this.state.EmpId,
            SmId:this.state.SmId,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            city: this.state.city,
            uname: this.state.uname,
            password: this.state.password
        }
        const emp ={
            created: true
        }

        axios.post('http://localhost:4000/storeManager/add/', Manager)
        .then(res => console.log(res.data));

        axios.put('http://localhost:4000/employee/update/status/'+this.props.match.params.id, emp)
        .then(res => console.log(res.data));

         this.props.history.push('/viewSManager');
       
    }

   

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add Store Manager</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>EmployeeID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.EmpId}
                                onChange={this.onChangeEmpID}
                                />
                    </div>
                    <div className="form-group">
                        <label>StoreManagerID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.SmId}
                                onChange={this.onChangeSMID}
                                />
                    </div>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.first_name}
                                onChange={this.onChangeFirstName}
                                />
                    </div>
                   
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.last_name}
                                onChange={this.onChangeLastName}
                                />
                    </div>

                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>

                    <div className="form-group">
                        <label>City: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.city}
                                onChange={this.onChangeCity}
                                />
                    </div>

                    <div className="form-group">
                        <label>User Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.uname}
                                onChange={this.onChangeUname}
                                />
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input  type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangepassword}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Store Manager" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}