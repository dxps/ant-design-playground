import React from "react";
import { Row, Col } from "antd";
import './layout-demos.css';


const LayoutFlexAlignDemo = (/* props */) => {

  return (
    <div>
      <p>Columns are aligned to the left (justify="start").</p>
      <Row type="flex" justify="start">
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
      </Row>
      <br/>

      <p>Columns are aligned to the left (justify="start") and vertically aligned to the top align="top".</p>
      <Row type="flex" justify="start" align="top">
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
      </Row>
      <br/>

      <p>Columns are centerly aligned within the row (justify="center") and vertical alignment is middle (align="middle").</p>
      <Row type="flex" justify="center" align="middle">
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
      </Row>
      <br/>

      <p>Columsn are aligned to the right (justify="end") and vertically alignment is bottom.</p>
      <Row type="flex" justify="end" align="bottom">
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
      </Row>
      <br/>

      <p>Columns are space evenly distributed in the row (justify="space-between")</p>
      <Row type="flex" justify="space-between">
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
      </Row>
      <br/>

      <p>Columns get the same space around them (justify="space-around")</p>
      <Row type="flex" justify="space-around">
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
        <Col span={4}>.ant-col-4</Col>
      </Row>
    </div>
  );

};

export default LayoutFlexAlignDemo;
