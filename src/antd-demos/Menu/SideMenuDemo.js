import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class SideMenuDemo extends React.Component {

  constructor(props) {

    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.state = {
      current: '1',
      openKeys: []
    };

  }

  handleClick(e) {

    /* eslint no-console: 0 */
    console.log('click ', e);
    this.setState({
      current: e.key,
      openKeys: e.keyPath.slice(1),
    });

  }

  onToggle(info) {

    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
    });

  }

  render() {

    return (
      <Menu onClick={this.handleClick}
            style={{ width: 240 }}
            openKeys={this.state.openKeys}
            onOpen={this.onToggle}
            onClose={this.onToggle}
            selectedKeys={[this.state.current]}
            mode="inline">

        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Option Set 1</span></span>}>

          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
          <Menu.Item key="13">Option 13</Menu.Item>

        </SubMenu>

        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Option Set 2</span></span>}>

          <Menu.Item key="21">Option 21</Menu.Item>
          <Menu.Item key="22">Option 22</Menu.Item>

          <SubMenu key="sub23" title="Option Set 3">
            <Menu.Item key="231">Option 231</Menu.Item>
            <Menu.Item key="232">Option 232</Menu.Item>
          </SubMenu>

        </SubMenu>

      </Menu>
    );

  }

}

export default SideMenuDemo;
