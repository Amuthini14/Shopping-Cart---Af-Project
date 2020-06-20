import React, {Component} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default class EditCategory extends Component {

    constructor(props) {
        super(props);

        this.onChangeCtyID = this.onChangeCtyID.bind(this);
        this.onChangeCtyName = this.onChangeCtyName.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cty_id: '',
            cty_name: ''
           
        }

    
    }

    componentDidMount() {
        axios.get('http://localhost:5000/category/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    cty_id: response.data.cty_id,
                    cty_name: response.data.cty_name,
                  
                    
                })
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error)
            })
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

        const Category = {
            cty_id: this.state.cty_id,
            cty_name: this.state.cty_name
           
        }

        axios.post('http://localhost:5000/category/update/'+this.props.match.params.id, Category)
        .then(res => console.log(res.data));

         this.props.history.push('/viewCategory');
       
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
<h3 className="box-title">Edit Category</h3>
</div>
{/* /.box-header */}
{/* form start */}
<form role="form"  onSubmit={this.onSubmit}>
<div className="box-body">
<div className="form-group">
                        <label>Category ID: </label>
                        <input  readOnly
                                className="form-control"
                                value={this.state.cty_id}
                                onChange={this.onChangeCtyID}
                                />
                    </div>
                    <div className="form-group">
                        <label>Category Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.cty_name}
                                onChange={this.onChangeCtyName}
                                />
                    </div>


</div>
{/* /.box-body */}
<div className="box-footer">
<button type="submit" className="btn btn-primary">Update Category</button>
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