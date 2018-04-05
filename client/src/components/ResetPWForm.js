import React from "react";
import axios from "axios";
import { POST_SEND_EMAIL, POST_RESET_PASSWORD } from "api";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "containers/Login";

import { Form, Icon, Input, Button, message } from "antd";

import "styles/Login.css";

const FormItem = Form.Item;

class NormalResetPWForm extends React.Component {
  handleSubmit1 = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        axios
          .post(POST_SEND_EMAIL, {
            email: values.email
          })
          .then(res => {
            console.log(res);
            message.success(res.data);
          })
          .catch(e => {
            message.error(e.response.data);
            console.log(e.response);
          });
      }
    });
  };
  handleSubmit2 = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        if (values.password1 == values.password2) {
          axios
            .post(POST_RESET_PASSWORD, {
              email: values.email,
              aucode: values.aucode,
              password: values.password1
            })
            .then(res => {
              console.log(res);
              message.success(res.data);
              this.props.actions.login({
                email: values.email,
                password: values.password
              });
              this.props.history.push("/");
            })
            .catch(e => {
              message.error(e.response.data);
              console.log(e.response);
            });
        }
        else {
          message.error("New password does not match up with confirm password.")
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit1} className="login-form">
          <FormItem>
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your Email!" }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Email"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Send Email
            </Button>
          </FormItem>
        </Form>
        <Form onSubmit={this.handleSubmit2} className="login-form">
          <FormItem>
            {getFieldDecorator("aucode", {
              rules: [{ required: true, message: "Please input Authentification Code!" }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Authentification Code"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password1", {
              rules: [{ required: true, message: "Please input new Password!" }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="New Password"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password2", {
              rules: [{ required: true, message: "Please input the new Password again!" }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="Confirm Password"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Reset Password
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: state.auth.user !== undefined
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

const WrappedNormalResetPWForm = Form.create()(NormalResetPWForm);

export default connect(mapStateToProps, mapDispatchToProps)(
  WrappedNormalResetPWForm
);
