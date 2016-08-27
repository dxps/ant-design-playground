import React from "react";
import { Row, Col } from "antd";
import './LayoutResponsiveDemo.css';


const LayoutResponsiveDemo = (/* props */) => {

  return (
    <div className="layout-responsive-demo">
      <p>There are four props for setting the spanning of columns
        based on screen size: xs, sm, md, and lg.</p>
      <Row gutter={20}>
        <Col xs={2} sm={4} md={6} lg={8}>'xs={2} sm={4} md={6} lg={8}'</Col>
        <Col xs={20} sm={16} md={12} lg={8}>'xs={20} sm={16} md={12} lg={8}'</Col>
        <Col xs={2} sm={4} md={6} lg={8}>'xs={2} sm={4} md={6} lg={8}'</Col>
      </Row>
    </div>
  );

};

export default LayoutResponsiveDemo;
