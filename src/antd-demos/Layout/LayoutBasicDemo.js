import React from "react";
import { Row, Col } from "antd";
import './layout-demos.css';


const LayoutBasicDemo = (/* props */) => {

  return (
    <div>
      <div>Ant Design offers a 24 columns grid layout.</div>
      <Row>
        <Col span={12}>.ant-col-12</Col>
        <Col span={12}>.ant-col-12</Col>
      </Row>
      <Row>
        <Col span={8}>.ant-col-8</Col>
        <Col span={8}>.ant-col-8</Col>
        <Col span={8}>.ant-col-8</Col>
      </Row>
      <Row>
        <Col span={6}>.ant-col-6</Col>
        <Col span={6}>.ant-col-6</Col>
        <Col span={6}>.ant-col-6</Col>
        <Col span={6}>.ant-col-6</Col>
      </Row>
    </div>
  );

};

export default LayoutBasicDemo;
