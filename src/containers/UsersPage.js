import React                           from "react";
import { connect }                     from "react-redux";
import { Input, Button, Row, Col }     from "antd";
import CustomTable                     from "./../components/CustomTable";
import StringFilterDropdown            from "./../components/StringFilterDropdown";
import DateTimeFilterDropdown          from "./../components/DateTimeFilterDropdown";
import { fetchUsers } from             "./../actions/users";

const InputGroup = Input.Group;
const ButtonGroup = Button.Group;

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  // bindActionCreators(ActionCreators, dispatch)
  return {
    fetchUsers: (params) => dispatch(fetchUsers(params))
  };
}

export class UsersPage extends React.Component {

  static propTypes = {
    fetchUsers: React.PropTypes.func,
    users: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.handleTableChange = this.handleTableChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onPaginationSizeChange = this.onPaginationSizeChange.bind(this);
    this.state = {
      selectedRowKeys: []
    };
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleTableChange(pagination, filters = {}, sorter = {}) {

    const pageParams = { page: pagination.current, per_page: pagination.pageSize };
    const filtersField = {};
    if (Object.keys(filters).length !== 0) {
      // enum filters
      [{
        key: "roles", filterParams: "roles_in"
      }].map(item => {
        if (filters[item.key]) {
          filtersField[`q[${item.filterParams}]`] = filters[item.key];
        }
      });

      // date range filter
      ['created_at'].map(item => {
        if (filters[item]) {
          filtersField[`q[${item}_gteq]`] = filters[item][0];
          filtersField[`q[${item}_lteq]`] = filters[item][1];
        }
      });

      // string filter
      ['name'].map(item => {
        if (filters[item]) {
          filtersField[`q[${item}_cont]`] = filters[item];
        }
      });
    }
    const sortParams = {};
    if (Object.keys(sorter).length !== 0) {
      const sortMethod = sorter.order === "descend" ? "desc" : "asc";
      sortParams['sorts'] = `${sorter.columnKey} ${sortMethod}`;
    }

    const params = Object.assign({}, pageParams, filtersField, sortParams);
    this.props.fetchUsers(params);
  }

  onSelectChange(selectedRowKeys) {

    this.setState({ selectedRowKeys });
  }

  onPaginationSizeChange(current, pageSize) {

    // console.log('UsersPage.onPaginationSizeChange > current: ', current, '; pageSize:', pageSize);
    const newState = {
      selectionDirty: false,
      pagination: this.state.pagination
    };
    newState.pagination = Object.assign({}, this.state.pagination, {
      current,
      pageSize
    });
    this.setState(newState);
  }

  render() {

    const { users: { data, meta, isFetching } } = this.props;

    const roleFilter = [{
      text: 'admin',
      value: 'admin'
    }, {
      text: "user",
      value: "user"
    }];

    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "email",
        dataIndex: "email",
        key: "email"
      },
      {
        title: "name",
        dataIndex: "name",
        key: "name",
        sorter: true,
        filterDropdown: <StringFilterDropdown columnKey={"name"}/>
      },
      {
        title: "roles",
        dataIndex: "roles",
        key: "roles",
        sorter: true,
        filters: roleFilter
      },
      {
        title: "created at",
        dataIndex: "created_at",
        key: "created_at",
        sorter: true,
        filterDropdown: <DateTimeFilterDropdown columnKey={"created_at"}/>
      },
      {
        title: 'action',
        key: 'operation',
        render: () => (
          <ButtonGroup>
            <Button type="primary">action 1</Button>
            <Button type="ghost">action 2</Button>
          </ButtonGroup>
        )
      }
    ];

    const pagination = {
      showSizeChanger: true,
      total: meta.total,
      pageSize: meta.perPage,
      pageSizeOptions: ['1', '10', '20', '50'],
      onShowSizeChange: this.onPaginationSizeChange
    };

    const { selectedRowKeys } = this.state;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <Row>
          <Col span={8}>
            <div style={{ marginBottom: 16 }}>
              <Button type="primary">Bulk Run</Button>
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `oper1 ${selectedRowKeys.length} oper2` : ''}
              </span>
            </div>
          </Col>
          <Col span={8} offset={8}>
            <div className="ant-search-input-wrapper">
              <InputGroup className="ant-search-input">
                <Input placeholder="search ..."/>
                <div className="ant-input-group-wrap">
                  <Button icon="search" className="ant-search-btn"/>
                </div>
              </InputGroup>
            </div>
          </Col>
        </Row>

        <CustomTable
          columns={columns}
          dataSource={data}
          pagination={pagination}
          rowKey={(record) => record.id}
          loading={isFetching}
          onChange={this.handleTableChange}
          rowSelection={rowSelection}
          size="middle"
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
