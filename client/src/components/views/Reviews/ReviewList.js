import React,{Component} from 'react';
import Review from './Review';
import { Divider } from 'antd';

class ReviewList extends Component  {
    reviews=[
        {
            name:"A.Samarasinghe",
            comment:"Excellent",
            rating:5,
            date:"2020-05-06"
        },
        {
            name:"Nethu Perera",
            comment:"Quality material has been used. Reasonable for the price",
            rating:4,
            date:"2020-05-06"
        }
    ];
    render(){
        return (
            <div>
                <h3><b>Comments</b></h3>
                {
                    this.reviews.map(review => {
                        return (
                            <div>
                                <b>{review.name}</b><br/>
                                {review.comment}<br/>
                                <div style={{color:"blue"}}> Rating : {review.rating} </div>
                               
                                <Divider/>
                            </div>
                        )
                    })
                }
    
            </div>
        )
    }
    
}

export default ReviewList;