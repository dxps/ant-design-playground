import React from "react";
import { Popover, Button } from "antd";

class PopoverDemo2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.hide = this.hide.bind(this);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
  }

  hide() {
    this.setState({
      visible: false,
    });
  }

  handleVisibleChange(visible) {
    this.setState({ visible });
  }

  render() {

    const content = (
      <div>
        <a onClick={this.hide}>Close Card</a>
      </div>
    );
    return (
      <Popover
        content={content} title="title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}>
        <Button type="primary">You may click on the popup card</Button>
      </Popover>
    );

  }

}

export default PopoverDemo2;
