import React, {Component} from 'react';
import axios from 'axios';

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

        axios.post('http://localhost:4000/category/add/', newCategory)
            .then(res => console.log(res.data));
        this.setState({
            cty_id: '',
            cty_name: ''
          
        })
        
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add category</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>CategoryID: </label>
                        <input  type="text"
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
                   
                 

                  

                    <div className="form-group">
                        <input type="submit" value="Create Category" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddCategory;