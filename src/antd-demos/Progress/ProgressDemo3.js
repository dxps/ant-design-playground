import React from "react";
import { Progress, Row, Col, Button } from "antd";

const ButtonGroup = Button.Group;

class ProgressDemo3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { percent: 0 };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }

  decrease() {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }

  render() {

    return (
      <div>
        <div></div>
        <br/>
        <Row>
          <Col span={10} push={1}>
            <div>
              <Progress type="circle" percent={this.state.percent}/>
            </div>
          </Col>
          <Col span={4}>
            <ButtonGroup size="large">
              <Button type="ghost" onClick={this.decrease} icon="minus"/>
              <Button type="ghost" onClick={this.increase} icon="plus"/>
            </ButtonGroup>
          </Col>
          <Col span={10} push={1}>
            <Progress percent={this.state.percent}/>
          </Col>
        </Row>
      </div>
    );
  }

}

export default ProgressDemo3;
