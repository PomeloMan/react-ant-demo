import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './main.module.scss'

const { Sider } = Layout;

class MainSider extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className={styles.sider_logo} />
        <Menu theme="dark" mode="inline">
          {menusJsx(this.props.menus)}
        </Menu>
      </Sider>
    )
  }
}

let menusJsx = (menus) => {
  let menuJsx = [];
  menus.forEach((menu, index) => {
    if(menu.children) {
      let childJsx = menusJsx(menu.children);
      menuJsx.push(
        <Menu.SubMenu
          key={menu.id}
          title={
            <span>
              <Icon type={menu.icon} />
              <span>{menu.name}</span>
            </span>
          }
        >
          {childJsx}
        </Menu.SubMenu>
      )
    } else {
      menuJsx.push(
        <Menu.Item key={menu.id}>
          <Link to={menu.url}>
            <Icon type={menu.icon}></Icon>
            <span>{menu.name}</span>
          </Link> 
        </Menu.Item>
      )
    }
  });
  return menuJsx;
}

export default connect((state) => ({
  collapsed: state.collapsed
}))(MainSider);
