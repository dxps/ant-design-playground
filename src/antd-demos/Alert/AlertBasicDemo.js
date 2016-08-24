import React from "react";
import { Alert } from "antd";


const handleClose = (event) => {
  /* eslint no-console:0 */
  console.log("handleClose> event:", event);
};

const AlertBasicDemo = (props) => {

  return (
    <div>
      <Alert message="Success Alert Message" type="success"/>
      <Alert message="This is a warning message shown using Alert component."
             type="warning"
             closable
             onClose={handleClose}
      />
      <Alert message="Error Text"
             description="Error Description Error Description Error Description Error Description Error Description Error Description"
             type="error"
             closable
             onClose={handleClose}
      />
      A custom text is used instead of the close icon.
      <Alert message="Info Text" type="info" closeText="Close" />
    </div>
  );

};

export default AlertBasicDemo;
