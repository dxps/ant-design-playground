import React from "react";
import { Progress, Row, Col } from "antd";


const ProgressDemo1 = (/* props */) => {

  return (
    <div>
      <div>Progress - 'circle' type in normal and 'mini' versions</div>
      <br/>
      <Row>
        <Col span={12}>
          <Progress type="circle" percent={75} />
          <Progress type="circle" percent={40} status="exception" />
          <Progress type="circle" percent={100} />
        </Col>
        <Col span={12} push={1}>
          <Progress type="circle" percent={30} width={80} />
          <Progress type="circle" percent={70} width={80} status="exception" />
          <Progress type="circle" percent={100} width={80} />
        </Col>
      </Row>
    </div>
  );

};

export default ProgressDemo1;
