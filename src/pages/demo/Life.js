import React, { Component } from 'react'
import Child from './Child';
import './index.less';
import {Button} from 'antd';

export default class Life extends Component {

  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }

  HandleAdd=()=>{
    this.setState(
      {
        count:this.state.count+1
      }
    )
  }

  HandleClick(){
    this.setState(
      {
        count:this.state.count+1
      }
    )
  }

  render() {
    return (
      <div className='content'>
        <p>React 生命周期</p>
        <Button onClick={this.HandleAdd}>antd 点击一下</Button>
        <button onClick={this.HandleAdd}>点击一下</button>
        <button onClick={this.HandleClick.bind(this)}>点击一下</button>

        <p>{this.state.count}</p>
        <Child name='kobe'></Child>
      </div>
    )
  }
}
