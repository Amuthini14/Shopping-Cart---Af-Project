import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Category = props => (
    <tr>
        <td>{props.category.cty_id}</td>
        <td>{props.category.cty_name}</td>
       
        <td>
            <Link to={"/editCategory/"+props.category._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/deleteCategory/"+props.category._id}>Delete</Link>
        </td>
       
    </tr>
)


export default class ViewCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {categories: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/category/')
            .then(response => {
                this.setState({categories: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentWillMount(){

        axios.get('http://localhost:4000/category/')
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
               <div>
                <h3>Category List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Category ID</th>
                            <th>Category Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { this.categoryList() }
                    </tbody>
                    
                </table>
            </div>
            </div>
        )
    }
}