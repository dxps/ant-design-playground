import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { loginUser } from './../../actions/auth';

import './Login.scss';

const createForm = Form.create;
const FormItem = Form.Item;

function noop() {
  return false;
}

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginFaileCallback = this.loginFaileCallback.bind(this);
  }

  handleSubmit(e) {

    e.preventDefault();

    const { dispatch } = this.props;
    this.props.form.validateFields((errors) => {
      if (errors) {
        return false;
      }
      const creds = (this.props.form.getFieldsValue());
      dispatch(loginUser(creds, this.loginFaileCallback));
    });

  }

  loginFaileCallback(email, message){

    const { setFields } = this.props.form;
    const newValue = {
      email: {
        name: "email",
        validating: false,
        value: email,
        errors: [message]
      }
    };
    setFields(newValue);

  }

  render() {

    const { getFieldProps } = this.props.form;
    const emailProps = getFieldProps('email', {
      validate: [{
        rules: [
          { required: true }
        ],
        trigger: 'onBlur'
      }, {
        rules: [
          { type: 'email', message: 'Email address is not valid.' }
        ],
        trigger: ['onBlur', 'onChange']
      }]
    });

    const passwordProps = getFieldProps('password', {
      rules: [
        { required: true, min: 8, message: 'Password must have at least 8 characters.' }
      ]
    });

    return (
      <div className="login-container">
        <div className="login-mask"/>
        <Form className="login-content" horizontal onSubmit={this.handleSubmit} form={this.props.form}>
          <h2>ant-design-playground Login</h2>
          <FormItem label="Email" hasFeedback>
            <Input
              {...emailProps}
              placeholder="ant@design.com"
              type="email"
            />
          </FormItem>
          <FormItem label="Password" hasFeedback>
            <Input {...passwordProps} type="password" autoComplete="off" placeholder="12345678"
              onContextMenu={noop} onPaste={noop} onCopy={noop} onCut={noop} />
          </FormItem>
          <FormItem>
            <Button className="ant-col-24" type="primary" htmlType="submit">Login</Button>
          </FormItem>
        </Form>
      </div>
    );

  }
}

Login.propTypes = {
  form: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { auth } = state;
  return {
    auth
  };
}

export default connect(mapStateToProps)(createForm()(Login));
