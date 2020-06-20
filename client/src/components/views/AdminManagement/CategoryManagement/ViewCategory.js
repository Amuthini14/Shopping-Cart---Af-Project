import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Menu from '../components/Menu';



const Category = props => (
    <tr>
        <td>{props.category.cty_id}</td>
        <td>{props.category.cty_name}</td>
       
        <td>
          
            <form action={"/editCategory/"+props.category._id}>
        <button type="submit" className="btn btn-primary">Edit</button>
        </form>
        </td>
        <td>
         
            <form action={"/deleteCategory/"+props.category._id}>
        <button type="submit" className="btn btn-danger">Delete</button>
        </form>
        </td>
       
    </tr>
)


export default class ViewCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {categories: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/category/')
            .then(response => {
                this.setState({categories: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate(){

        axios.get('http://localhost:5000/category/')
        .then(response => {
            this.setState({categories: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })

    }

   

    categoryList() {
        return this.state.categories.map(function(currentCty, i) {
            return <Category category={currentCty} key={i} />;
        });
    }
    render() {
        return (
           


<div>
<Header />
                  <Menu />  
<div className="content-wrapper">
{/* Content Header (Page header) */}
<section className="content-header"  >
<h1>
Employee Managment

</h1>
<ol className="breadcrumb">
<li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
<li><a href="#">Tables</a></li>
<li className="active">Simple</li>
</ol>
</section>
{/* Main content */}
<section className="content"  >
<div className="row">
<div className="col-md-10">
<div className="box">
<div className="box-header with-border">
<h3 className="box-title">View Employee</h3>
</div>
{/* /.box-header */}
<div className="box-body">
<table className="table table-bordered">
<tbody><tr>
<th>Category ID</th>
 <th>Category Name</th>
 <th>Action</th>
  
</tr>

{ this.categoryList() }
   
</tbody></table>
</div>
</div></div></div></section></div>

</div>
        )
    }
}