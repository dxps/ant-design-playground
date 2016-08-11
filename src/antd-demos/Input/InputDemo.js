import React from "react";
import { connect } from "react-redux";
import { Input, Select, Row, Col } from "antd";

class InputDemo extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    const selectBefore = (
      <Select defaultValue="Http://" style={{ width: 80 }}>
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
      </Select>
    );
    const selectAfter = (
      <Select defaultValue=".com" style={{ width: 70 }}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
      </Select>
    );

    return (

      <div>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <br/>Input Group<br/><br/>
            <Input.Group size="large">
              <Col span="8">
                <Input defaultValue="1st input large 4"/>
              </Col>
              <Col span="16">
                <Input defaultValue="2nd input large 8"/>
              </Col>
            </Input.Group>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <br/>Before / After Addons<br/><br/>
            <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite"/>
            <div style={{ marginTop: 8 }}>
              <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite"/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

}

function mapStateToProps(/* state */) {
  return {};
}

export default connect(mapStateToProps)(InputDemo);
