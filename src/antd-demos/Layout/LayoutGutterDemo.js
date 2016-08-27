import React from "react";
import { Row, Col } from "antd";
import './LayoutGutterDemo.css';


const LayoutGutterDemo = (/* props */) => {

  return (
    <div className="layout-gutter-demo">
      <p>...</p>
      <Row gutter={16}>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">.ant-col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">.ant-col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">.ant-col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="gutter-box">.ant-col-6</div>
        </Col>
      </Row>

    </div>
  );

};

export default LayoutGutterDemo;
