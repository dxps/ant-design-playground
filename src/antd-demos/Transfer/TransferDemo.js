import React from "react";
import { connect } from "react-redux";
import { Transfer } from "antd";

class TransferDemo extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      sourceData: [
        { key: 1, title:'element 1' },
        { key: 2, title:'element 2' },
        { key: 3, title:'element 3' },
      ],
      targetKeys: [],
    };
  }

  handleChange(targetKeys) { // }, direction, moveKeys) {

    //console.log(targetKeys, direction, moveKeys);
    this.setState({ targetKeys });
  }

  render() {

    return (
      <div>
        <div>Basic Usage</div>
        <Transfer
          dataSource={this.state.sourceData}
          targetKeys={this.state.targetKeys}
          onChange={this.handleChange}
          render={item => item.title}
        />
      </div>
    );
  }

}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(TransferDemo);
