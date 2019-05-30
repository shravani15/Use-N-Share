import React, { Component } from 'react'
import {
    Form, Select, InputNumber, Switch, 
    Slider, Button, Upload, Icon, Checkbox,
    Row, Col, Input
  } from 'antd';
  
const { Option } = Select;
const { TextArea } = Input;
  
class ProductUpload extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }

  
    normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      let token = JSON.parse(localStorage.getItem('firebaseui::rememberedAccounts'));
      const email = token[0].email
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="Username"
          >
            <span className="ant-form-text">{email}</span>
          </Form.Item>
          <Form.Item
            label="Select"
            hasFeedback
          >
            {getFieldDecorator('select', {
              rules: [
                { required: true, message: 'Please select your country!' },
              ],
            })(
              <Select placeholder="Please select a city">
                <Option value="india">Mumbai</Option>
                <Option value="india">Delhi</Option>
                <Option value="india">Hyderabad</Option>
                <Option value="india">Warangal</Option>
                <Option value="india">Kolkata</Option>
                <Option value="india">Chennai</Option>
              </Select>
            )}
          </Form.Item>
  
          <Form.Item
            label="Select[multiple]"
          >
            {getFieldDecorator('select-multiple', {
              rules: [
                { required: true, message: 'Please select a product category', type: 'array' },
              ],
            })(
              <Select mode="multiple" placeholder="Please select a product category">
                <Option value="clothes">Clothes</Option>
                <Option value="food">Hand Bags</Option>
                <Option value="spects">Jewelery</Option>
              </Select>
            )}
          </Form.Item>
  
          <Form.Item
            label="Input Product Price"
          >
            {getFieldDecorator('input-number', { initialValue: 50 })(
              <InputNumber min={1} max={100000} />
            )}
            <span className="ant-form-text">"Rupees"</span>
          </Form.Item>
  
          {/* <Form.Item
            label=" Fulfilled"
          >
            {getFieldDecorator('switch', { valuePropName: 'checked' })(
              <Switch />
            )}
          </Form.Item> */}
          <Form.Item label="Product Description">
                <TextArea rows={8}/>
              
          </Form.Item>
  
          <Form.Item
            label="Upload Product Images"
          >
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </Form.Item>
  
          <Form.Item
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedUpload = Form.create({ name: 'validate_other' })(ProductUpload);
  export default WrappedUpload;
  