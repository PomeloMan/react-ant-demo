import React from 'react';
import MainSider from './main-sider';
import MainHeader from './main-header';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { MainProvider as service } from '@/provider';

import styles from './main.module.scss'

// import { Route } from 'react-router-dom'
// import loadable from '@/util/loadable';
const { Content } = Layout;
// const User = loadable(() => import('@/views/system/user'))

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      route: props.route,
      menus: []
    }
  }

  componentWillMount() {
    let $this = this;
    service.getMenusJson().then(({ data: res }) => {
      $this.setState({
        menus: res
      })
    })
  }

  render() {
    const route = this.state.route;
    return (
      <Layout className={styles.layout_body}>
        <MainSider menus={this.state.menus} route={route} />
        <Layout>
          <MainHeader collapsed={this.props.collapsed} />
          <Content className={styles.layout_content}>
            {/* <Route path={`${this.props.match.url}/system/user`} component={User}/> */}
            { renderRoutes(route.children) }
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect((state) => ({
  collapsed: state.collapsed
}))(Main);
