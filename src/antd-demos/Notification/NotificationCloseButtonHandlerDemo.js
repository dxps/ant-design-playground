import React from 'react';
// import { connect } from "react-redux";
import { Button, notification } from 'antd';

class NotificationCloseButtonHandlerDemo extends React.Component {

  constructor(props) {
    super(props);
  }

  openNotification() {

    const key = `open${Date.now()}`;

    const btnClick = function() {
      console.log("btnClick() called."); // es-lint-disable-line no-console
      notification.close(key);
    };

    const btn = (
      <Button type="primary" size="small" onClick={btnClick}>
        Close
      </Button>
    );

    const closeHandler = function() {
      console.log("Notification was closed as close button was clicked or duration time elapsed."); // es-lint-disable-line no-console
    };

    notification.open({
      message: 'Title',
      description: 'The content of the notification.',
      btn,
      key,
      duration: 8,
      onClose: closeHandler,
    });

  }

  render() {

    return (
      <div>
        <Button type="primary" size="small" onClick={this.openNotification}>
          Open the notification
        </Button>
      </div>
    );

  }

}

// function mapStateToProps() {
//   return {};
// }

// export default connect(mapStateToProps)(NotificationCloseButtonHandlerDemo);

export default NotificationCloseButtonHandlerDemo;
