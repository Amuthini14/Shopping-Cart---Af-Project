import React,{Component} from "react";
import { Divider ,Form, Input, InputNumber, Button } from "antd";

  const onFinish = values => {
    console.log(values);
  };

const Review = () => {
  
    return (
     <div>
         <Divider/>
         <h3><b>Product Review</b></h3>
      <Form name="review form" onFinish={onFinish} >

        
        <Form.Item name={['user', 'review']} >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button  htmlType="submit" type="primary">
            Post
          </Button>
        </Form.Item>
      </Form>
      </div>
    );
  };

export default Review;