import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class HorizontalMenuDemo extends React.Component {

  constructor(props) {

    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      current: '1'
    };

  }

  handleClick(e) {

    /* eslint no-console: 0 */
    console.log('handleClick> ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {

    return (
      <Menu onClick={this.handleClick}
            style={{ width: 240 }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[this.state.current]}
            mode="inline">

        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Submenu 1</span></span>}>
          <MenuItemGroup title="Group 1">
            <Menu.Item key="111">Option 111</Menu.Item>
            <Menu.Item key="112">Option 112</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Group 2">
            <Menu.Item key="121">Option 121</Menu.Item>
            <Menu.Item key="122">Option 122</Menu.Item>
          </MenuItemGroup>
        </SubMenu>

        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Submenu 2</span></span>}>
          <Menu.Item key="21">Option 21</Menu.Item>
          <Menu.Item key="22">Option 22</Menu.Item>
          <SubMenu key="sub23" title="Submenu 2-3">
            <Menu.Item key="231">Option 231</Menu.Item>
            <Menu.Item key="232">Option 232</Menu.Item>
          </SubMenu>
        </SubMenu>

        <SubMenu key="sub3" title={<span><Icon type="setting" /><span>Submenu 3</span></span>}>
          <Menu.Item key="31">Option 31</Menu.Item>
          <Menu.Item key="32">Option 32</Menu.Item>
          <Menu.Item key="33">Option 33</Menu.Item>
          <Menu.Item key="34">Option 34</Menu.Item>
        </SubMenu>

      </Menu>
    );

  }

}

export default HorizontalMenuDemo;
