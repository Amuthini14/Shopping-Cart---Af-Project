import React, {Component} from 'react';
import axios from 'axios';

export default class DeleteStoreManager extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }



    componentDidMount() {
    

        axios.delete("http://localhost:4000/storeManager/delete/" + this.props.match.params.id )
        .then(response => {})
        .catch(function (error){
            console.log(error);
        });
      
    }
    
      onSubmit(e) {
        e.preventDefault();
     

        
        this.props.history.push('/viewSManager');
      }

  render() {
      return(
        <div>
        <h1> Store Manager deleted successfully </h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="submit"
              value="Back to View StoreManager"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>

      )
  }

}