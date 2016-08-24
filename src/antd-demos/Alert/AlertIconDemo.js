import React from "react";
import { Alert } from "antd";


const handleClose = (event) => {
  /* eslint no-console:0 */
  console.log("handleClose> event:", event);
};

const AlertIconDemo = (props) => {
  return (
    <div>
      <Alert message="Success Alert Message" type="success" showIcon />
      <Alert message="Informational Alert" type="info" showIcon />
      <Alert message="This is a warning message shown using Alert component."
             type="warning"
             closable
             onClose={handleClose}
             showIcon
      />
      <Alert message="An error has been encountered while doing something. No description available."
             type="error"
             closable
             onClose={handleClose}
             showIcon
      />
      <Alert message="Error Text"
             description="Error Description Error Description Error Description Error Description Error Description Error Description"
             type="error"
             closable
             onClose={handleClose}
             showIcon
      />
    </div>
  );


};

export default AlertIconDemo;
