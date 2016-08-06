import React from "react";
import { connect } from "react-redux";
import { TreeSelect } from "antd";

const TreeNode = TreeSelect.TreeNode;

class TreeSelectDemo extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);

  }

  onChange(value) {

    // console.log('TreeSelectDemo> onChange arguments:', arguments); /* eslint-disable no-console */
    this.setState({value});

  }

  render() {

    return (
      <div>

        <div>Basic usage</div>

        <TreeSelect style={{ width: 300 }}
                    value={this.state.value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll
                    onChange={this.onChange}>

          <TreeNode value="parent 1" title="parent 1" key="0-1">

            <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
              <TreeNode value="leaf1" title="my leaf" key="random"/>
              <TreeNode value="leaf2" title="your leaf" key="random1"/>
            </TreeNode>

            <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
              <TreeNode value="sss" title={<b style={{ color: '#08c' }}>just blue</b>} key="random3"/>
            </TreeNode>

          </TreeNode>

        </TreeSelect>
      </div>
    );

  }


}

function mapStateToProps() {

  return {};

}

export default connect(mapStateToProps)(TreeSelectDemo);
