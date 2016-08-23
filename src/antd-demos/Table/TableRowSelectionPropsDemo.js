import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";


class TableRowSelectionPropsDemo extends React.Component {

  constructor(props) {

    super(props);

    const data = [{
      key: '1',
      name: 'John Doe',
      age: 32,
      address: 'Doe Street, house D',
    }, {
      key: '2',
      name: 'Jane Doe',
      age: 42,
      address: 'Doe Street, house D',
    }, {
      key: '3',
      name: 'Foo Man',
      age: 32,
      address: 'Foe Street, Flat 12',
    }, {
      key: '4',
      name: 'Mikey Mouse',
      age: 32,
      address: 'Disney Street, TV',
    }];

    this.state = {
      data
    };

  }

  render() {

    const columns = [{
      title: 'name',
      dataIndex: 'name',
      render: text => <a href="#">{text}</a>
    }, {
      title: 'age',
      dataIndex: 'age',
    }, {
      title: 'address',
      dataIndex: 'address',
    }];

    const rowSelection = {
      getCheckboxProps: record => ({
        disabled: record.name === 'Jane Doe',    // this column cannot be selected
      }),
    };

    return (
      <div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
      </div>
    );

  }

}

function mapStateToProps(/* state */) {
  return {};
}

export default connect(mapStateToProps)(TableRowSelectionPropsDemo);
