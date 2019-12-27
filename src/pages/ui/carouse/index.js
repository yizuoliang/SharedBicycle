import React, { Component } from 'react';
import { Carousel, Card } from 'antd';
import './../ui.less';
export default class Carouse extends Component {

  render() {
    return (
      <div className='card-wrap'>
        <Card title="文字背景轮播" className='card-wrap'>
          <Carousel autoplay>
            <div>
              <h3>詹姆斯</h3>
            </div>
            <div>
              <h3>科比</h3>
            </div>
            <div>
              <h3>魔术师</h3>
            </div>
            <div>
              <h3>奥尼尔</h3>
            </div>
          </Carousel>
        </Card>
        <Card title="图片轮播" className='slider-wrap'>
          <Carousel >
            <div>
              <img src='/carousel-img/carousel-1.png' alt='图1' />
            </div>
            <div>
              <img src='/carousel-img/carousel-2.png' alt='图2' />
            </div>
            <div>
              <img src='/carousel-img/carousel-3.png' alt='图3' />
            </div>
          </Carousel>
        </Card>
      </div>
    )
  }
}
