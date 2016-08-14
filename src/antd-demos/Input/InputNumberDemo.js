import React from "react";
import { connect } from "react-redux";
import { InputNumber, Row, Col } from "antd";

class InputNumberDemo extends React.Component {

  constructor(props) {
    super(props);

  }

  handleChange(/*value*/) {
    //console.log('InputNumber value changed to ', value);
  }

  render() {

    return (

      <div>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <br/>InputNumber<br/><br/>
            <InputNumber min={1} max={10} defaultValue={3} onChange={this.handleChange} />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <br/>InputNumber with two decimals<br/><br/>
            <InputNumber min={1} max={10} step={0.01} onChange={this.handleChange} />
          </Col>
        </Row>
      </div>
    );
  }

}

function mapStateToProps(/* state */) {
  return {};
}

export default connect(mapStateToProps)(InputNumberDemo);
