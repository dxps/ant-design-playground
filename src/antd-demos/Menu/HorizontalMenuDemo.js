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
          <Icon type="appstore" />appstore (disabled)
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />settings</span>}>
          <MenuItemGroup title="Section 1">
            <Menu.Item key="setting:11">Subsection 1-1</Menu.Item>
            <Menu.Item key="setting:12">Subsection 1-2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Section 2">
            <Menu.Item key="setting:21">Subsection 2-1</Menu.Item>
            <Menu.Item key="setting:22">Subsection 2-2</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="other">
          <a href="#">others</a>
        </Menu.Item>

      </Menu>
    );

  }

}

export default HorizontalMenuDemo;
