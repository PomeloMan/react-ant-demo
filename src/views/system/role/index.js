import React from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Tooltip } from 'antd';
import { rowSelection } from '@/util';
import { actions } from '@/store/action'

import {
  UserProvider as service
} from '@/provider'

class Role extends React.Component {

  data = [{
    key: '111',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '222',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '333',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }, {
    key: '444',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  }]
  columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '30%'
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '20%'
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: 'Operation',
    dataIndex: '',
    key: '',
    render: (text, record, index) => {
      return (
        <div>
          <Tooltip title="Edit">
            <Icon type="edit" onClick={this.detail.bind(this, record)} />
          </Tooltip>
          <Tooltip title="Delete">
            <Icon type="delete" onClick={this.delete.bind(this, text, record, index)} />
          </Tooltip>
        </div>
      )
    }
  }]

  detail(record) {
    this.props.history.push(`/main/system/user/${record.key}`)
  }

  delete(text, record, index) {
    console.log(text)
    console.log(record)
    console.log(index)
  }

  componentWillMount() {
    // let $this = this;
    Promise.all([
      this.getUserList()
    ]).then(res => {
      console.log(res)
    })
  }

  getUserList() {
    let $this = this;
    return service.getUserList().then(({ data: res }) => {
      console.log($this)
    })
  }

  render() {
    return (
      <div>
        <Table rowSelection={rowSelection(this)} columns={this.columns} dataSource={this.data} size="middle" />
      </div>
    )
  }
}

export default connect((state) => ({
  selectedRowKeys: state.role.selectedRowKeys
}), actions('role'))(Role);
