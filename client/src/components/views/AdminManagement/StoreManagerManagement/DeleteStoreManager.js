import React, {Component} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default class DeleteStoreManager extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }



    componentDidMount() {
    

        axios.delete("http://localhost:5000/storeManager/delete/" + this.props.match.params.id )
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
          <Header />
                  <Menu /> 
<div className="content-wrapper">
{/* Content Header (Page header) */}
<section className="content-header">
<h1>
Store Manager Management

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
<h3 className="box-title">store Manager deleted successfully</h3>
</div>
{/* /.box-header */}
{/* form start */}
<form role="form"  onSubmit={this.onSubmit}>

{/* /.box-body */}
<div className="box-footer">
<button type="submit" className="btn btn-primary">back to View Store Manager</button>
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