import React from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux';
import actions from '@/store/action';

import styles from './main.module.scss'

const { Header } = Layout;

class MainHeader extends React.Component {

  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className={styles.header_trigger}
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          // onClick={this.props.toggle.bind(this, this.props.collapsed)}
          onClick={this.props.toggleCollapse.bind(this, this.props.collapsed)}
        />
      </Header>
    )
  }
}

// export default connect((state) => ({
//   collapsed: state.collapsed
// }), (dispatch) => {
//   return {
//     toggle: (collapsed) => dispatch({
//       type: 'TOGGLE_COLLAPSED',
//       collapsed: !collapsed
//     })
//   }
// })(MainHeader);

export default connect((state) => ({
  collapsed: state.collapsed
}), actions)(MainHeader);
