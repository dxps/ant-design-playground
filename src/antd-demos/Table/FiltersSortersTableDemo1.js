import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";


class FiltersSortersTableDemo1 extends React.Component {

  constructor(props) {

    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.setAgeSort = this.setAgeSort.bind(this);

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
      filteredInfo: null,
      sortedInfo: null,
      data
    };

  }

  handleChange(pagination, filters, sorter) {

    // console.log('handleChange> args ', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }

  clearFilters(e) {

    e.preventDefault();
    this.setState({ filteredInfo: null });
  }

  clearAll(e) {

    e.preventDefault();
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }

  setAgeSort(e) {

    e.preventDefault();
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }

  render() {

    let { sortedInfo, filteredInfo, data } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const columns = [{
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'John', value: 'John' },
        { text: 'Doe', value: 'Doe' },
        { text: 'Mouse', value: 'Mouse' },
      ],
      filteredValue: filteredInfo.name,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    }, {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    }, {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: 'Disney', value: 'Disney' },
        { text: 'Doe', value: 'Doe' },
        { text: 'Foe', value: 'Foe' },
        { text: 'Fake', value: 'Fake' }
      ],
      filteredValue: filteredInfo.address,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
    }];

    return (
      <div>
        <div className="table-operations">
          <a href="#" onClick={this.setAgeSort}>Age descending order</a> &nbsp; | &nbsp;
          <a href="#" onClick={this.clearFilters}>Clear Filters</a> &nbsp; | &nbsp;
          <a href="#" onClick={this.clearAll}>Clear filters and sorting</a>
        </div>
        <Table columns={columns} dataSource={data} onChange={this.handleChange}/>
      </div>
    );

  }

}

function mapStateToProps(/* state */) {
  return {};
}

export default connect(mapStateToProps)(FiltersSortersTableDemo1);
