import React,{Component} from "react";
import { Divider ,Form, Input, InputNumber, Button } from "antd";
import Rating from "../StarRating/Rating";

  const onFinish = values => {
    console.log(values);
  };

const Review = () => {
  
    return (
     <div>
         <Divider/>
         <h3><b>Product Review</b></h3>
        <Form name="review form" onFinish={onFinish} >
        <b>Rate the Product</b>
        <Rating />
        <br/>
        <b>Comment</b>
        <Form.Item name={['user', 'review']} >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button  htmlType="submit" type="primary">
            Post
          </Button>
        </Form.Item>
      </Form>
      <Divider/>
      </div>
     
    );
  };

export default Review;