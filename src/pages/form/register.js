import React, { Component } from 'react';
import moment from 'moment';
import {
  Card, Form, Input, Tooltip, Icon, Cascader,
  Select, Row, Col, Upload, Button, AutoComplete,
  Radio, InputNumber, Switch, DatePicker, TimePicker
} from 'antd';
const { Option } = Select;
const dateFormat = 'YYYY/MM/DD';
const { TextArea } = Input;



class FormRegister extends Component {

  state = {
    loading: false,
  };

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }

    if (info.file.status === 'done') {
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      }
    };

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Card title="注册表单" className='card-wrap'>
          <Form  {...formItemLayout}>
            <Form.Item label="用户名" >
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空!'
                    }
                  ]
                })(<Input  placeholder="请输入用户名/手机号" />)
              }</Form.Item>
            <Form.Item label="密码">
              {
                getFieldDecorator('userPwd', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '密码不能为空!'
                    }, {
                      min: 6, max: 10, message: '长度在6-10位'
                    }
                  ]
                })(<Input type="password" placeholder="请输入密码" />)
              }
            </Form.Item>
            <Form.Item label="性别">
              {
                getFieldDecorator('sex', {
                  initialValue: '1',
                  rules: []
                })(<Radio.Group>
                  <Radio value='1'>男</Radio>
                  <Radio value='0'>女</Radio>
                </Radio.Group>)
              }
            </Form.Item>
            <Form.Item label="年龄">
              {
                getFieldDecorator('age', {
                  initialValue: '18',
                  rules: []
                })(<InputNumber></InputNumber>)
              }
            </Form.Item>
            <Form.Item label="当前状态">
              {
                getFieldDecorator('state', {
                  initialValue: '2',
                  rules: []
                })(
                  <Select>
                    <Option value='1'>绝代佳人</Option>
                    <Option value='2'>快乐逍遥</Option>
                    <Option value='3'>碌碌无为</Option>
                    <Option value='4'>清纯可人</Option>
                    <Option value='5'>才貌双全</Option>
                  </Select>)
              }
            </Form.Item>
            <Form.Item label="爱好">
              {
                getFieldDecorator('interest', {
                  initialValue: [],
                  rules: []
                })(<Select mode="multiple">
                  <Option value='1'>游泳</Option>
                  <Option value='2'>篮球</Option>
                  <Option value='3'>足球</Option>
                  <Option value='4'>看书</Option>
                  <Option value='5'>游戏</Option>
                </Select>)
              }
            </Form.Item>
            <Form.Item label="是否已婚">
              {
                getFieldDecorator('isMarry', {
                  valuePropName: 'checked',
                  initialValue: true,
                  rules: []
                })(<Switch />)
              }
            </Form.Item>
            <Form.Item label="生日">
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2015/01/01', dateFormat),
                  rules: []
                })(<DatePicker />)
              }
            </Form.Item>
            <Form.Item label="联系地址">
              {
                getFieldDecorator('address', {
                  initialValue: '',
                  rules: []
                })(<TextArea rows={4} />)
              }
            </Form.Item>
            <Form.Item label="上班时间">
              {
                getFieldDecorator('workTime', {
                  initialValue: moment('08:30:00', 'HH:mm:ss'),
                  rules: []
                })(<TimePicker />)
              }
            </Form.Item>
            <Form.Item label="头像">
              {
                getFieldDecorator('pic', {
                  initialValue: moment('08:30:00', 'HH:mm:ss'),
                  rules: []
                })(<Upload listType="picture-card"
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  showUploadList={false}
                  onChange={this.handleChange}
                >
                {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>)
              }
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FormRegister);