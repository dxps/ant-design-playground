import React from 'react';
// import { connect } from "react-redux";
import { Button, notification } from 'antd';
import './NotificationWithIconDemo.css';

class NotificationWithIconDemo extends React.Component {

  constructor(props) {
    super(props);
  }

  openNotificationWithIcon(type) {

    return function () {
      notification[type]({
        message: 'Notification Title',
        description: 'This is the  content of the notification.',
      });
    };

  }

  render() {

    return (
      <div className="notif-icon-demo">
        <Button type="primary" size="small" onClick={this.openNotificationWithIcon('success')}>
          Success
        </Button>
        <Button size="small" onClick={this.openNotificationWithIcon('info')}>
          Info
        </Button>
        <Button size="small" onClick={this.openNotificationWithIcon('warning')}>
          Warning
        </Button>
        <Button type="primary" size="small" onClick={this.openNotificationWithIcon('error')}>
          Error
        </Button>
      </div>
    );

  }

}

// function mapStateToProps() {
//   return {};
// }
// export default connect(mapStateToProps)(NotificationWithIconDemo);

export default NotificationWithIconDemo;
