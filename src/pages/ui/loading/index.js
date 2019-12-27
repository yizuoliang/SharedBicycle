import React, { Component } from 'react';
import { Card, Spin, Icon, Alert } from 'antd';
import './../ui.less';
export default class Loading extends Component {

  render() {
    const antIcon = <Icon type="android" style={{ fontSize: 24 }} spin />
    const antIconLoading = <Icon type="loading" style={{ fontSize: 24 }} spin />
    return (
      <div>
        <Card title="spin用法" className='card-wrap'>
          <Spin size="small" />
          <Spin style={{ margin: '0 20px' }} />
          <Spin size="large" />
          <Spin indicator={antIcon} style={{ margin: '0 20px' }} />
        </Card>
        <Card title="内容遮罩" className='card-wrap'>
          <Alert message='React' description='欢迎来到湖人球迷联盟' type='info'></Alert>
          <Spin>
            <Alert message='React' description='欢迎来到湖人球迷联盟' type='warning'> </Alert>
          </Spin>
          <Spin tip='加载中...'>
            <Alert message='React' description='欢迎来到湖人球迷联盟' type='info'></Alert>
          </Spin>
          <Spin tip='加载中...' indicator={antIconLoading} >
            <Alert message='React' description='欢迎来到湖人球迷联盟' type='error'></Alert>
          </Spin>
        </Card>
      </div>
    )
  }
}
