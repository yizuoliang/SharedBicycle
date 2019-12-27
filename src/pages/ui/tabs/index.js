import React, { Component } from 'react';
import { Card, Radio, Tabs } from 'antd';
import './../ui.less';
const { TabPane } = Tabs;
export default class Tab extends Component {

  state = { size: 'small' };

  onChange = e => {
    this.setState({ size: e.target.value });
  };

  callBack=(key)=>{
    console.log("你选择了第"+key+"个标签")
  }

  render() {
    const { size } = this.state;
    return (
      <div>
        <Card title="Tab标签页" className='card-wrap'>
          <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
          <Tabs defaultActiveKey="1" size={size} onChange={this.callBack}>
            <TabPane tab="PG" key="1">
              <p>保罗</p>
              <p>库里</p>
            </TabPane>
            <TabPane tab="SG" key="2">
              <p>科比</p>
              <p>哈登</p>
            </TabPane>
            <TabPane tab="SF" key="3">
              <p>詹姆斯</p>
              <p>杜兰特</p>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}
