import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export class Signup extends React.Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => this.props.history.push('/feature') );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name='email'
            type='text'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <fieldset>
          <label>password</label>
          <Field
            name='password'
            type='password'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <div>
          {this.props.errorMessage}
        </div>
        <button>Sign Up!</button>
      </form>
    );
  }
}

const MapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(MapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);