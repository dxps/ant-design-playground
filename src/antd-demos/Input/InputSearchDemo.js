import React from "react";
import classNames from 'classnames';
import { Input, Button } from "antd";

const InputGroup = Input.Group;

class InputSearchDemo extends React.Component {

  constructor(props) {

    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFocusBlur = this.handleFocusBlur.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      value: '',
      focus: false,
    };

  }

  handleInputChange(e) {

    this.setState({ value: e.target.value });

  }

  handleFocusBlur(e) {

    this.setState({ focus: e.target === document.activeElement });

  }

  handleSearch() {

    /* eslint no-console:0 */
    console.log('handleSearch> state.value: ' + this.state.value);
    if (this.props.onSearch) {
      this.props.onSearch(this.state.value);
    }

  }

  render() {

    const { style, size, placeholder } = this.props;
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim(),
    });
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus,
    });
    return (
      <div className="ant-search-input-wrapper" style={style}>
        <InputGroup className={searchCls}>
          <Input placeholder={placeholder} value={this.state.value}
                 onChange={this.handleInputChange}
                 onFocus={this.handleFocusBlur}
                 onBlur={this.handleFocusBlur}
                 onPressEnter={this.handleSearch}
          />
          <div className="ant-input-group-wrap">
            <Button icon="search" className={btnCls} size={size}
                    onClick={this.handleSearch}/>
          </div>
        </InputGroup>
      </div>
    );

  }

}

export default InputSearchDemo;
