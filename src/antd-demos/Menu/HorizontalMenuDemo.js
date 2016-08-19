import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class HorizontalMenuDemo extends React.Component {

  constructor(props) {

    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      current: 'mail'
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
            selectedKeys={[this.state.current]}
            mode="horizontal">

        <Menu.Item key="mail">
          <Icon type="mail" />mail
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />appstore
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />settings</span>}>
          <MenuItemGroup title="分组1">
            <Menu.Item key="setting:1">选项1</Menu.Item>
            <Menu.Item key="setting:2">选项2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="分组2">
            <Menu.Item key="setting:3">选项3</Menu.Item>
            <Menu.Item key="setting:4">选项4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="other">
          <a href="#">other</a>
        </Menu.Item>

      </Menu>
    );

  }

}

export default HorizontalMenuDemo;
