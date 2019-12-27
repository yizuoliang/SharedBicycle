import React, { Component } from 'react';
import { Card, Button ,notification } from 'antd';
import './../ui.less';
export default class Notice extends Component {

  openNotification = (type,direction) => {
    if(direction){
      notification.config({
        placement:direction
      });
    }
    notification[type]({
      message: '成功',
      description:
        '今天发工资了,好开心.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  render() {
    return (
      <div>
        <Card title="通知提醒框" className='card-wrap'>
          <Button type="primary" onClick={()=>this.openNotification('success')}>success</Button>
          <Button type="primary" onClick={()=>this.openNotification('error')}>error</Button>
          <Button type="primary" onClick={()=>this.openNotification('info')}>info</Button>
          <Button type="primary" onClick={()=>this.openNotification('warning')}>warning</Button>
        </Card>
        <Card title="通知提醒框" className='card-wrap'>
          <Button type="primary" onClick={()=>this.openNotification('success','topLeft')}>success</Button>
          <Button type="primary" onClick={()=>this.openNotification('error','bottomLeft')}>error</Button>
          <Button type="primary" onClick={()=>this.openNotification('info','bottomRight')}>info</Button>
          <Button type="primary" onClick={()=>this.openNotification('warning','topRight')}>warning</Button>
        </Card>
      </div>
    )
  }
}
