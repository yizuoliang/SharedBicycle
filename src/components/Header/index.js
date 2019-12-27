import React, { Component } from 'react'
import { Row, Col } from 'antd';
import './index.less'
import Util from '../../utils/utils'
import { setInterval } from 'timers';
import Axios from '../../axios';
export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    this.setState(
      {
        username: '沧海一粟'
      }
    );
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    },1000);
    //this.getWeatherAPIData();
  }

  getWeatherAPIData(){
    let ctiy='深圳';
    Axios.jsonp({
      url:'http://api.avatardata.cn/Weather/Query?key=f46a222190814d738b159e064235308d&cityname='+encodeURIComponent(ctiy)
    }).then((res)=>{
      if(res.error_code === '0'){
        let data=res.result.realtime.weather;
        this.setState(
          {weather:data}
        );
      }
    });
  }

  render() {
    return (
      <div className='header'>
        <Row className='header-top'>
          <Col span='24'>
            <span>欢迎,{this.state.username}</span>
            <a href='#'>退出</a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span='4' className='breadcrumb-title'>
            首页
          </Col>
          <Col span='20' className='weather'>
            <span className='date'>{this.state.sysTime}</span>
            <span className='weather-detail'>
              晴转多云
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}
