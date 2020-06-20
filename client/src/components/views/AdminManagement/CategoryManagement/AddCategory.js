import React, {Component} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Menu from '../components/Menu';

export  class AddCategory extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cty_id: '',
            cty_name: ''
          
        }

        this.onChangeCtyID = this.onChangeCtyID.bind(this);
        this.onChangeCtyName = this.onChangeCtyName.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
       
    }

    onChangeCtyID(e) {
        this.setState({
            cty_id: e.target.value
        });
    }

    onChangeCtyName(e) {
        this.setState({
            cty_name: e.target.value
        });
    }

    


    onSubmit(e) {
        e.preventDefault();

        

        
        const newCategory = {
            cty_id: this.state.cty_id,
            cty_name: this.state.cty_name
           
        }

        axios.post('http://localhost:5000/category/add/', newCategory)
            .then(res => console.log(res.data));
        this.setState({
            cty_id: '',
            cty_name: ''
          
        })
        
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
Category Management

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
<h3 className="box-title">Create Category</h3>
</div>
{/* /.box-header */}
{/* form start */}
<form role="form"  onSubmit={this.onSubmit}>
<div className="box-body">
<div className="form-group">
 <label > CategoryID</label>
 <input type="text"    className="form-control"
           value={this.state.cty_id}
           onChange={this.onChangeCtyID}
        />
</div> 
<div className="form-group">
 <label >Category Name: </label>
 <input type="text" className="form-control" 
               value={this.state.cty_name}
               onChange={this.onChangeCtyName}
             />
</div>

</div>
{/* /.box-body */}
<div className="box-footer">
<button type="submit" className="btn btn-primary">Create Category</button>
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

export default AddCategory;