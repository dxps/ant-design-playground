import React from "react";
import { Tooltip, Button } from "antd";


const TooltipAlignAtCenterDemo = (/* props */) => {
  return (


    <div>
      <Tooltip title="Propmt Text">
        <Button>Tooltip default pointing alignment</Button>
      </Tooltip>
      &nbsp;
      <Tooltip placement="topLeft" title="Propmt Text" arrowPointAtCenter>
        <Button>Tooltip central alignment</Button>
      </Tooltip>
    </div>
  );
};

export default TooltipAlignAtCenterDemo;
