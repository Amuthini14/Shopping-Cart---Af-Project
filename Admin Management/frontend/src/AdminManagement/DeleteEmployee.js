import React, {Component} from 'react';
import axios from 'axios';

export default class DeleteEmployee extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }



    componentDidMount() {
        axios.delete("http://localhost:4000/employee/delete/" + this.props.match.params.id )
        .then(response => {})
        .catch(function (error){
            console.log(error);
        });

        

       
      }

      onSubmit(e) {
        e.preventDefault();
     

        this.props.history.push('/viewEmployee');
      }

  render() {
      return(
        <div>
        <h1> Employee deleted successfully </h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="submit"
              value="Back to View Employee"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>

      )
  }

}