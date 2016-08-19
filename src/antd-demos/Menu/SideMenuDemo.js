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

        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>

          <Menu.Item key="1">选项1</Menu.Item>
          <Menu.Item key="2">选项2</Menu.Item>
          <Menu.Item key="3">选项3</Menu.Item>

        </SubMenu>

        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>

          <Menu.Item key="5">选项5</Menu.Item>
          <Menu.Item key="6">选项6</Menu.Item>

          <SubMenu key="sub3" title="三级导航">
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>

        </SubMenu>

      </Menu>
    );

  }

}

export default SideMenuDemo;
