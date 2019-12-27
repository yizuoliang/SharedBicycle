import React, { Component } from 'react';
import { Card, Form, Button, Input, Icon, Checkbox, message } from 'antd';

class FormLogin extends Component {

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.userName} 恭喜您成功登录,当前密码为:${userInfo.userPwd}`)
      }
    });
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单" className='card-wrap'>
          <Form layout="inline" >
            <Form.Item >
              <Input prefix={<Icon type="user" />} placeholder="请输入用户名/手机号"></Input>
            </Form.Item>
            <Form.Item >
              <Input type='password' prefix={<Icon type="lock" />} placeholder="请输入密码" ></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                登录
             </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="登录水平表单" className='card-wrap'>
          <Form className="login-form" style={{ width: 300 }}>
            <Form.Item>
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空!'
                    }, {
                      pattern: /^[a-zA-Z0-9_-]{4,16}$/,
                      message: '用户名必须是字母、数字、-、_组成的4-16位字符'
                    }

                  ]
                })(<Input prefix={<Icon type="user" />} placeholder="请输入用户名/手机号" />)
              }

            </Form.Item>
            <Form.Item>
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
                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />)
              }
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName:'checked',
                initialValue: true,
                rules: []
              })(<Checkbox>记住密码</Checkbox>)}
              <a className="login-form-forgot" href="" style={{float:"right"}}>忘记密码? </a>
              <Button type="primary" className="login-form-button" onClick={this.handleSubmit}>登录</Button>
              <a href="">注册</a>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FormLogin);