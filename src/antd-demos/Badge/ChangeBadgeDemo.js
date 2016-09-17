import React from "react";
import { Badge, Button, Icon, Row, Col } from "antd";
import './ChangeBadgeDemo.css';


class ChangeBadgeDemo extends React.Component {

  constructor(props) {

    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.toggleShowSimpleBadge = this.toggleShowSimpleBadge.bind(this);
    this.state = {
      count: 3,
      show: true
    };

  }

  increase() {

    const count = this.state.count + 1;
    this.setState({ count });

  }

  decrease() {

    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });

  }

  toggleShowSimpleBadge() {

    this.setState({ show: !this.state.show });

  }

  render() {

    return (
      <div>
        <Row type="flex" justify="space-around" align="bottom">
          <Col xs={12} sm={6} md={4} lg={4}>
            <Badge count={this.state.count}>
              <a href="#" className="change-badge-demo" />
            </Badge>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Badge dot={this.state.show}>
              <a href="#" className="change-badge-demo" />
            </Badge>
          </Col>
          <Col xs={0} sm={12} md={16} lg={16} />
        </Row>
        <Row type="flex" justify="space-around" align="top">
          <Col xs={12} sm={6} md={4} lg={4}>
            <Button.Group>
              <Button type="ghost" onClick={this.decrease}>
                <Icon type="minus" />
              </Button>
              <Button type="ghost" onClick={this.increase}>
                <Icon type="plus" />
              </Button>
            </Button.Group>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <Button type="ghost" onClick={this.toggleShowSimpleBadge} style={{ marginLeft: 8 }}>
              Red badge toggle
            </Button>
          </Col>
          <Col xs={0} sm={12} md={16} lg={16} />
        </Row>
      </div>
    );

  }

}

export default ChangeBadgeDemo;
