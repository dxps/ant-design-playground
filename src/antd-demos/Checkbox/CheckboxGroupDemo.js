import React from 'react';
import { Checkbox } from 'antd';

class CheckboxGroupDemo extends React.Component {

  constructor(props) {
    super(props);
  }

  changeHandler(checkdValues) {
    console.log('checkedValues: ', checkdValues);
  }

  render() {

    const plainOptions = ['Apple', 'Pear', 'Orange'];

    const options = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' },
    ];

    const optionsWithDisabled = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange', disabled: false },
    ];

    return (
      <div>
        <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={this.changeHandler} />
        <br />
        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={this.changeHandler} />
        <br />
        <Checkbox.Group options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.changeHandler} />
      </div>
    );

  }

}

export default CheckboxGroupDemo;
