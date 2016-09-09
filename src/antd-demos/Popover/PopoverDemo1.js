import React from "react";
import { Popover, Button, Row, Col } from "antd";

const PopoverDemo1 = (/* props */) => {

  const content = (
    <div>
      <p>Content line 1</p>
      <p>Second line ...</p>
    </div>
  );

  return (
    <div>
      <Row>
        <Col span="8">
          <Popover content={content} title="Popover Title" trigger="hover">
            <Button>Popover shows on hover</Button>
          </Popover>
        </Col>
        <Col span="8">
          <Popover content={content} title="Popover Title" trigger="focus">
            <Button>Popover shows on focus</Button>
          </Popover>
        </Col>
        <Col span="8">
          <Popover content={content} title="Popover Title" trigger="click">
            <Button>Popover shows on click</Button>
          </Popover>
        </Col>
      </Row>
    </div>
  );

};

export default PopoverDemo1;
