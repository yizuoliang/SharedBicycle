import React, { Component } from 'react'
import { Menu } from 'antd';
import './index.less';
import { NavLink } from 'react-router-dom';
import MenuConfig from './../../config/menuConfig'
const { SubMenu } = Menu;
export default class NavLeft extends Component {

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    });
  }
  //菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key} title={item.title}>
        <NavLink to={item.key}>
          {item.title}
        </NavLink>
      </Menu.Item>
    })
  }


  render() {
    return (
      <div>
        <div className='logo'>
          <img src='/assets/logo-ant.svg' alt='湖人队'></img>
          <h1>Lakers</h1>
        </div>
        <Menu mode="vertical" theme='dark'>
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}
