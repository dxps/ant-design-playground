import React from 'react';
import { connect } from "react-redux";
import { Modal, Button } from 'antd';

class BasicModalOverlayClickDemo extends React.Component {

  constructor(props) {

    super(props);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.state = { visible: false };
  }

  showModal() {
    this.setState({ visible: true });
  }

  handleOk() {

    //this.setState({ visible: false });
  }

  handleCancel(/* event */) {
    //console.log('handleCancel called.');
    this.setState({ visible: false });
  }

  render() {

    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Display a modal dialog</Button>
        <Modal
          title="Basic Modal" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
          maskClosable={false}>
          <p>some content ...</p>
          <p>some content ...</p>
          <p>some content ...</p>
        </Modal>
      </div>
    );
  }

}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(BasicModalOverlayClickDemo);
