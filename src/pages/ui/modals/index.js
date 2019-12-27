import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './../ui.less';
export default class Modals extends Component {
  state = {
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false
  };

  handleOk = (type) => {

    this.setState({ [type]: false });
  }

  handleCancel = (type) => {

    this.setState({ [type]: false });
  }

  showModal = (type) => {
    this.setState({
      [type]: true
    });
  }

  handleConfirm=(type)=>{
    Modal[type]({
      title: '确认',
      content: '是否要退出湖人球迷群',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  render() {
    return (
      <div>
        <Card title="基础模态窗" className='card-wrap'>
          <Button type='primary' onClick={() => this.showModal('visible1')}>Open</Button>
          <Modal title="科比" visible={this.state.visible1}
            onOk={() => this.handleOk('visible1')}
            onCancel={() => this.handleCancel('visible1')} >
            <p>你喜欢湖人队的科比吗?</p>
          </Modal>
          <Button type='primary' onClick={() => this.showModal('visible2')}>自定义页脚</Button>
          <Modal title="詹姆斯" visible={this.state.visible2}
            onOk={() => this.handleOk('visible2')}
            onCancel={() => this.handleOk('visible2')}
            okText='喜欢' cancelText='讨厌'>
            <p>你喜欢湖人队的詹姆斯吗?</p>
          </Modal>
          <Button type='primary' onClick={() => this.showModal('visible3')}>顶部20px弹窗</Button>
          <Modal title="湖人队大佬"
            visible={this.state.visible3}
            style={{ top: 20 }}
            onOk={() => this.handleOk('visible3')}
            onCancel={() => this.handleOk('visible3')}>
            <p>湖人队的老大是谁?</p>
          </Modal>
          <Button type='primary' onClick={() => this.showModal('visible4')}>水平垂直居中</Button>
          <Modal title="湖人宿敌"
            wrapClassName='vertical-center-modal'
            visible={this.state.visible4}
            style={{ top: 20 }}
            onOk={() => this.handleOk('visible4')}
            onCancel={() => this.handleOk('visible4')}>
            <p>湖人队的宿敌是谁?</p>
          </Modal>
        </Card>

        <Card title="信息确认框" className='card-wrap'>
          <Button onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
          <Button onClick={() => this.handleConfirm('info')}>Info</Button>
          <Button onClick={() => this.handleConfirm('success')}>Success</Button>
          <Button onClick={() => this.handleConfirm('warning')}>Warning</Button>
          <Button onClick={() => this.handleConfirm('error')}>Error</Button>
        </Card>
      </div>
    )
  }
}
