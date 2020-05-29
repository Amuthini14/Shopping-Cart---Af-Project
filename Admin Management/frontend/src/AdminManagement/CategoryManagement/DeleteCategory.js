import React, {Component} from 'react';
import axios from 'axios';

export default class DeleteCategory extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }



    componentDidMount() {
        axios.delete("http://localhost:4000/category/delete/" + this.props.match.params.id )
        .then(response => {})
        .catch(function (error){
            console.log(error);
        });

       
      }

      onSubmit(e) {
        e.preventDefault();
     

        this.props.history.push('/viewCategory');
      }

  render() {
      return(
        <div>
        <h1> Category deleted successfully </h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="submit"
              value="Back to View Category"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>

      )
  }

}