import React from "react";
import { Alert } from "antd";


const handleClose = (event) => {
  /* eslint no-console:0 */
  console.log("handleClose> event:", event);
};

const AlertBannerDemo = (/* props */) => {

  return (
    <div>
      <Alert message="Succint success message"
             type="success"
             banner
             closeText
      />
      <Alert message="This is a warning message shown using Alert component."
             type="warning"
             closable
             onClose={handleClose}
             banner
      />
    </div>
  );

};

export default AlertBannerDemo;
