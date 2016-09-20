import React from "react";
import { Popconfirm, message } from "antd";

const PopconfirmBasicDemo = ( /* props */ ) => {

  let confirm = () => {
    message.success("Delete was confirmed.");
  };

  let cancel = () => {
    message.error("Delete was canceled.");
  };


  return (
    <Popconfirm title="Are you sure you want to delete this task ?"
                onConfirm={confirm}
                onCancel={cancel}>
      <a href="#">Delete</a>
    </Popconfirm>
  );

};

export default PopconfirmBasicDemo;
