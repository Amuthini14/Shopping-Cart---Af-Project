import React, { Component } from 'react';
import { Card ,Row,Col,Button} from 'antd';


class Wishlist extends Component {
   
    render(
     
    ) {
        return (
            <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>
                <h2> Wishlist</h2>
           
                <Row>
                <Col span={8}>
                            <Card
                                style={{ width: 300 }}
                                // cover={<img src={black} width={500} height={300}/>}
                            >
                                <h2>Sophie Black Dress</h2>
                                <Button type="primary">View Details</Button>
                                <Button type="danger">Remove</Button>
                                </Card>
                </Col>

                <Col span={8}>
                            
                            <Card
                                style={{ width: 300 }}
                                // cover={<img src={pure} width={500} height={300}/>}
                            >
                                <h2>Royal Elegance Purple Saree</h2>
                                 <Button type="primary">View Details</Button>
                                <Button type="danger">Remove</Button>
                            </Card>
                </Col>
                
                <Col span={8}>
                            
                            <Card
                                style={{ width: 300 }}
                                // cover={<img src={saress} width={500} height={300} />}
                            >
                                <h2>Dream India Black Saree</h2>
                                  <Button type="primary">View Details</Button>
                                <Button type="danger">Remove</Button>
                            </Card>
                </Col>
                
                      
             </Row>

            </div>
        )
    }
}

export default Wishlist;