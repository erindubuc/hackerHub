import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      // object to be used with Redux
      errors: {}
    };
  }

  // check to see if we are logged in or not
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    // can test for certain properties
    // if there is an errors prop
    if (nextProps.errors) {
      // get errors from redux and put into props
      // once new props are included, include errors
      this.setState({ errors: nextProps.errors });
    }
  }
  // to change component state
  // e = whatever field is being filled in
  // set it to value from input
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    //allows user to change state of value fields
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    // so these can be used within the actions
    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    // bring errors in
    const { errors } = this.state;

    const { user } = this.props.auth;

    return (

      <div className="register">
        {user ? user.name : null}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your DevConnector account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="This site uses Gravatar, so if you want a profile image, use a Gravatar email"
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
// putting auth state inside of a property called auth so it can be accessed  
const mapStateToProps = (state) => ({
  auth: state.auth,
  // auth comes from rootReducer 
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));