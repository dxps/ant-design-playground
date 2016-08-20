import React from "react";
import { Input } from "antd";
import './InputSizesDemo.css';

class InputSizesDemo extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      value: '',
      focus: false,
    };

  }

  render() {

    return (
      <div className="example-input">
        <Input size="large" placeholder="large size" />
        <Input placeholder="default size" />
        <Input size="small" placeholder="small size" />
      </div>
    );

  }

}

export default InputSizesDemo;
