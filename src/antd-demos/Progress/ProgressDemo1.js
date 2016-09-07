import React from "react";
import { Progress, Row, Col } from "antd";


const ProgressDemo1 = (/* props */) => {

  return (
    <div>
      <div>Progress - default type in normal and 'mini' versions</div>
      <br/>
      <Row>
        <Col span={12}>
          <Progress percent={30}/>
          <Progress percent={50} status="active"/>
          <Progress percent={70} status="exception"/>
          <Progress percent={100}/>
          <Progress percent={50} showInfo={false}/>
        </Col>
        <Col span={12} push={1}>
          <Progress percent={30} strokeWidth={5} />
          <Progress percent={50} strokeWidth={5} status="active" />
          <Progress percent={70} strokeWidth={5} status="exception" />
          <Progress percent={100} strokeWidth={5} />
        </Col>
      </Row>
    </div>
  );

};

export default ProgressDemo1;
