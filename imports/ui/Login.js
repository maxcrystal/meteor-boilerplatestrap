import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Alert } from 'reactstrap';

import BoxedView from './BoxedView.js';


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      loggedIn: !!Meteor.userId(),
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.refs.input.value.trim();
    let password = this.refs.password.refs.input.value.trim();

    this.props.loginWithPassword({email}, password, error => {
      if (!error) {
        this.setState({
          error: '',
          loggedIn: !!Meteor.userId(),
        });
      } else {
        this.setState({error: error.reason});
      }
    });
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <BoxedView className="shadow">
            <h2>Login</h2>
            {this.state.error ? <Alert color="danger">{this.state.error}</Alert> : undefined}
            <Form onSubmit={this.onSubmit.bind(this)}>
              <FormGroup>
                <Input className="boxed-view__item" type="email" name="email" ref="email" innerRef="input" placeholder="Email" autoComplete="email"/>
                <Input className="boxed-view__item" type="password" name="password" ref="password" innerRef="input" placeholder="Password" autoComplete="current_password"/>
              </FormGroup>
              <Button className="boxed-view__item" color="primary" block>Login</Button>
            </Form>
            <Link className="boxed-view__link" to="/signup">Create an account?</Link>
        </BoxedView>
      );
    } else {
      return <Redirect to={this.props.redirect} />;
    }
  };
};

Login.propTypes = {
  loginWithPassword: PropTypes.func.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default withTracker(props => {
  return {
    loginWithPassword: Meteor.loginWithPassword,
    redirect: '/dashboard',
  };
})(Login);
