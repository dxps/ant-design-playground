import React from "react";
import { Input } from "antd";

class TextareaAutosizeDemo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Input type="textarea"
               placeholder="Autosize height based on content"
               autosize/>
        <div style={{ margin: '24px 0' }}/>
        <Input type="textarea"
               placeholder="Autosize height with minimum (of 2) and maximum (of 6) lines"
               autosize={{ minRows: 2, maxRows: 6 }}/>
      </div>
    );

  }

}

export default TextareaAutosizeDemo;
