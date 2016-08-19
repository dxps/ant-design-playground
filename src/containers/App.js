import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
// import "./App.scss";
import "./App.less";
import { Menu, Breadcrumb, Icon, LocaleProvider } from "antd";
import Login from "./login/Login";
import enUS from "antd/lib/locale-provider/en_US";

const SubMenu = Menu.SubMenu;

class App extends Component {

  static propTypes = {
    children: PropTypes.element,
    isAuthenticated: React.PropTypes.bool,
    routing: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.renderAuthenticatedPage = this.renderAuthenticatedPage.bind(this);

    this.state = {
      collapse: false
    };
  }

  componentDidMount() {
  }

  renderAuthenticatedPage() {

    return (
      <LocaleProvider locale={enUS}>

        <div className="ant-layout-aside">
          <aside className="ant-layout-sider">

            <Link to={'/'}>
              <div className="ant-layout-logo"/>
            </Link>

            <Menu mode="inline" theme="light" defaultOpenKeys={['sub2']}>

              <SubMenu key="user-mgmt-submenu" title={<span><Icon type="user"/>User Management</span>}>

                <Menu.Item key="1">
                  <Link to={'/users'}>Users</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to={'/options'}>Options</Link>
                </Menu.Item>

              </SubMenu>

              <SubMenu key="sub2" title={<span><Icon type="user"/>Comps Demo</span>}>

                <Menu.Item key="2-1">
                  <Link to={'/transfer-demo'}>Transfer</Link>
                </Menu.Item>
                <Menu.Item key="2-2">
                  <Link to={'/tree-select-demo'}>Tree Select</Link>
                </Menu.Item>
                <Menu.Item key="2-3">
                  <Link to={'/adv-search-form'}>Advanced Search Form</Link>
                </Menu.Item>

                <Menu.Item key="2-4">
                  <Link to={'/basic-modal'}>Basic Modal</Link>
                </Menu.Item>
                <Menu.Item key="2-5">
                  <Link to={'/basic-modal-overlay'}>Basic Modal Overlay Click</Link>
                </Menu.Item>

                <SubMenu key="input-submenu" title={<span><Icon type="user"/>Input</span>}>

                  <Menu.Item key="2-6">
                    <Link to={'/input'}>Input</Link>
                  </Menu.Item>

                  <Menu.Item key="2-7">
                    <Link to={'/input-number'}>InputNumber</Link>
                  </Menu.Item>

                </SubMenu>

                <SubMenu key="menu-submenu" title={<span><Icon type="user"/>Menu</span>}>

                  <Menu.Item key="menu-submenu-1">
                    <Link to={'/horizontal-menu'}>Horizontal Menu</Link>
                  </Menu.Item>

                </SubMenu>

                <Menu.Item key="2-8">
                  <Link to={'/table-filters-sorter'}>Filters Sorters Demo 1</Link>
                </Menu.Item>

                <Menu.Item key="2-9">
                  <Link to={'/notification-close-handler'}>Notification close handler</Link>
                </Menu.Item>

                <Menu.Item key="2-10">
                  <Link to={'/checkbox-group'}>CheckboxGroup</Link>
                </Menu.Item>

              </SubMenu>

            </Menu>

          </aside>

          <div className="ant-layout-main">

            <div className="ant-layout-header">header</div>

            <div className="ant-layout-breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Section 1</Breadcrumb.Item>
                <Breadcrumb.Item>Subsection 11</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div className="ant-layout-container">
              <div className="ant-layout-content">
                <div style={{ height: 590 }}>
                  {this.props.children}
                </div>
              </div>
            </div>

            <div className="ant-layout-footer">
              © 2016 ant-design-playground
            </div>

          </div>

        </div>

      </LocaleProvider>
    );
  }

  render() {

    const { isAuthenticated } = this.props;
    return (
      <div>
        {isAuthenticated ? this.renderAuthenticatedPage() : <Login/>}
      </div>
    );
  }
}

function mapStateToProps(state) {

  const { routing, auth: { isAuthenticated, user } } = state;
  return {
    isAuthenticated, user, routing
  };

}

export default connect(mapStateToProps)(App);
