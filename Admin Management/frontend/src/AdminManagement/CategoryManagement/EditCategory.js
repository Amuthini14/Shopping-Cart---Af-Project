import React, {Component} from 'react';
import axios from 'axios';

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
        axios.get('http://localhost:4000/category/'+this.props.match.params.id)
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

        axios.post('http://localhost:4000/category/update/'+this.props.match.params.id, Category)
        .then(res => console.log(res.data));

         this.props.history.push('/viewCategory');
       
    }

   

    render() {
        return (

            
            <div style={{marginTop: 20}}>
                <h3>Edit Category</h3>
                <form onSubmit={this.onSubmit}>
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
                   
                

                    <div className="form-group">
                        <input type="submit" value="Update Category" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}